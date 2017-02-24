/**
 * This gulpfile will copy static libraries and a index.html file as well as
 * merge, babelify and uglify the rest of the javascript project.
 *
 * The expected project is to be laid out as such:
 *
 * ├─┬ src
 * │ ├─┬ media
 * │ │ ├── audofile1.wav
 * │ │ └── picture1.png
 * │ ├─┬ subfolder
 * │ │ └── class1.js
 * │ ├── index.js
 * │ └── index.html
 * └── gulpfile.js
 */

import babelify from 'babelify';
import browserSync from 'browser-sync';
import Browserify from 'browserify';
import del from 'del';
import envify from 'envify';
import gulp from 'gulp';
import concat from 'gulp-concat';
import gulpEslint from 'gulp-eslint';
import gulpSass from 'gulp-sass';
import gulpPlumber from 'gulp-plumber';
import gulpUtil from 'gulp-util';
import path from 'path';
import resolve from 'resolve';
import runSequence from 'run-sequence';
import source from 'vinyl-source-stream';
import watchify from 'watchify';

const config = {
  vendorPackages: [
    'node-polyglot',
    'react',
    'react-dom',
    'react-redux',
    'redux',
    'underscore',
  ]
};

/**
 * This task removes all files inside the 'dist' directory.
 */
gulp.task('clean', () => {
  del.sync('./dist/**/*');
});

/**
 * This task will copy all files from media into 'dist/media'.
 * If you want to process them, just add your code to this task.
 */
gulp.task('media', () =>
  gulp.src(['./src/media/**'])
    .pipe(gulpPlumber())
    .pipe(gulp.dest('./dist/media'))
);

gulp.task('media:watch', ['media'], () => {
  gulp.watch(['./src/media/**'], ['media']);
})

/**
 * This task will copy index.html into 'dist'.
 * If you want to process it, just add your code to this task.
 */
gulp.task('index', () =>
  gulp.src(['./src/index.html'])
    .pipe(gulpPlumber())
    .pipe(gulp.dest('./dist'))
);

gulp.task('index:watch', ['index'], () => {
  gulp.watch(['./src/index.html'], ['index']);
})

gulp.task('sass', () => (
  gulp.src('./src/**/*.scss')
    .pipe(gulpPlumber())
    .pipe(gulpSass({
      includePaths: './node_modules/normalize.css'
    })
    .on('error', gulpSass.logError))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist'))
));

gulp.task('sass:watch', ['sass'], () => (
  gulp.watch('./src/**/*.scss', ['sass'])
));

let hadLintError = false;

const lintStream = (stream) => (
  stream.pipe(gulpEslint())
    .pipe(gulpEslint.format())
    .pipe(gulpEslint.results((results) => {
      if (results.errorCount > 0) {
        hadLintError = true;
      }
    }))
);

gulp.task('lint', () =>
  lintStream(
    gulp.src([
      './src/**/*.js',
      './src/**/*.jsx',
      '!./src/lib/testing/**/*.js',
      '!./src/**/*.spec.js',
    ]).pipe(gulpPlumber())
  )
);

/**
 * This task will bundle all other js files and babelify them.
 * If you want to add other processing to the main js files, add your code here.
 */
const jsTask = ({ watch } = {}) => {
  const bundle = (browserify) => (
    browserify.bundle()
      .pipe(gulpPlumber())
      .on('error', function (err) {
        gulpUtil.log(err.message);
        browserSync.notify(err.message, 3000);
        this.emit('end');
      })
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./dist'))
  );

  const browserify = Browserify({
    entries: ['./src/index.jsx'],
    extensions: ['.js', '.jsx'],
    debug: process.env.NODE_ENV !== 'production',
    cache: {}, // watchify required
    packageCache: {}, // watchify required
    plugin: watch ? [watchify] : [],
    transform: [
      ['babelify', { sourceMaps: true }],
      'envify'
    ],
  })
    .on('log', (msg) => {
      gulpUtil.log('browserify:', msg);
    })
    .on('update', (files) => {
      gulpUtil.log(
        'watchify:',
        'updating files',
        files.map((file) => path.relative(__dirname, file))
      );
      lintStream(
        gulp.src(files).pipe(gulpPlumber())
      )
        .pipe(gulpEslint.results((results) => {
          if (hadLintError && !results.errorCount) {
            runSequence('lint');
            hadLintError = false;
          }
          bundle(browserify);
        }));
    });

  config.vendorPackages.forEach((id) => browserify.external(id));

  return bundle(browserify);
};

gulp.task('js', jsTask);
gulp.task('js:watch', () => jsTask({ watch: true }));

gulp.task('vendor', () => {
  const browserify = Browserify({
    debug: process.env.NODE_ENV !== 'production',
  });

  config.vendorPackages.forEach((id) => {
    browserify.require(resolve.sync(id), { expose: id });
  });

  return browserify.bundle()
    .on('error', function (err) {
      gulpUtil.log(err);
      this.emit('end');
    })
    .pipe(source('vendor.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => (
  runSequence(
    'clean',
    'lint',
    'vendor',
    ['sass:watch', 'index:watch', 'media:watch', 'js:watch'],
    'browser-sync',
    'refresh',
  )
));

/**
 * This task starts browserSync. Allowing refreshes to be called from the gulp
 * bundle task.
 */
gulp.task('browser-sync', () =>
  browserSync({ server:  { baseDir: './dist' } })
);

gulp.task('refresh', () =>
  gulp.watch('./dist/**/*', browserSync.reload)
);

gulp.task('build', () =>
  runSequence(
    'clean',
    'lint',
    'vendor',
    ['sass', 'index', 'media', 'js'],
  )
);

gulp.task('default', ['watch']);
