/**
 * This gulpfile will copy static libraries and a index.html file as well as
 * merge, babelify and uglify the rest of the javascript project.
 *
 * TODO:
 * - Separate media, libs and src with different watchers.
 * - Media and libs should only be copied to dist if they are different sizes.
 *
 * The expected project is to be laid out as such:
 *
 * ├─┬ src
 * │ ├─┬ libs
 * │ │ ├── tween.min.js
 * │ │ ├── pixi.min.js
 * │ │ └── jquery.min.js
 * │ ├─┬ media
 * │ │ ├── audofile1.wav
 * │ │ └── picture1.png
 * │ ├─┬ subfolder
 * │ │ └── class1.js
 * │ ├── index.js
 * │ └── index.html
 * └── gulpfile.js
 */

import watchify from 'watchify';
import browserify from 'browserify';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import uglify from 'gulp-uglify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import gutil from 'gulp-util';
import sourcemaps from 'gulp-sourcemaps';
import babelify from 'babelify';
import browserSync from 'browser-sync';
import del from 'del';

const customOpts = {
  entries: ['./src/index.js'],
  debug: true,
  transform: [['babelify', { ignore: ["./src/libs/**"] }]],
  ignore: ['./src/libs/**']
};
const opts = Object.assign({}, watchify.args, customOpts);
const b = watchify(browserify(opts));

b.on('log', gutil.log);

/**
 * This task removes all files inside the 'dist' directory.
 */
gulp.task('clean', function()
{
    del.sync('./dist/**/*');
});

/**
 * This task will copy all files from libs into 'dist/libs'.
 * If you want to process them, just add your code to this task.
 */
gulp.task('libs', ['clean'], function()
{
    return gulp.src(['./src/libs/**'])
        .pipe(plumber())
        .pipe(gulp.dest('./dist/libs'))
});

/**
 * This task will copy all files from media into 'dist/media'.
 * If you want to process them, just add your code to this task.
 */
gulp.task('media', ['libs'], function()
{
    return gulp.src(['./src/media/**'])
        .pipe(plumber())
        .pipe(gulp.dest('./dist/media'));
});

/**
 * This task will copy index.html into 'dist'.
 * If you want to process it, just add your code to this task.
 */
gulp.task('index', ['media'], function()
{
    return gulp.src(['./src/index.html'])
        .pipe(plumber())
        .pipe(gulp.dest('./dist'));
});

/**
 * This task will bundle all other js files and babelify them.
 * If you want to add other processing to the main js files, add your code here.
 */
gulp.task('bundle', ['index'], function()
{
    return b.bundle()
        .on('error', function(err)
        {
            console.log(err.message);
            browserSync.notify(err.message, 3000);
            this.emit('end');
        })
        .pipe(plumber())
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
});

/**
 * This task starts watching the files inside 'src'. If a file is changed,
 * removed or added then it will run refresh task which will run the bundle task
 * and then refresh the page.
 *
 * For large projects, it may be beneficial to separate copying of libs and
 * media from bundling the source. This is especially true if you have large
 * amounts of media.
 */
gulp.task('watch', ['bundle'], function()
{
    var watcher = gulp.watch('./src/**/*', ['refresh']);
    watcher.on('change', function(event)
    {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});


/**
 * This task starts browserSync. Allowing refreshes to be called from the gulp
 * bundle task.
 */
gulp.task('browser-sync', ['watch'], function()
{
    return browserSync({ server:  { baseDir: './dist' } });
});

/**
 * This is the default task which chains the rest.
 */
gulp.task('default', ['browser-sync']);

/**
 * Using a dependency ensures that the bundle task is finished before reloading.
 */
gulp.task('refresh', ['bundle'], browserSync.reload);
