(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDataAsync = exports.updateData = exports.clearData = undefined;

var _actionTypes = require('../constants/action-types');

var clearData = exports.clearData = function clearData() {
  return { type: _actionTypes.CLEAR_NESTED_LIST };
};

var updateData = exports.updateData = function updateData(data) {
  return {
    type: _actionTypes.UPDATE_NESTED_LIST,
    payload: data
  };
};

// Simulate async action with a Promise
var updateDataAsync = exports.updateDataAsync = function updateDataAsync(data) {
  return function (dispatch) {
    return Promise.resolve().then(function () {
      dispatch(updateData(data));
    });
  };
};

},{"../constants/action-types":16}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Greetings = function Greetings(_ref) {
  var name = _ref.name;
  return _react2.default.createElement(
    "div",
    { className: "greetings" },
    "Hello " + name + "!"
  );
};

Greetings.propTypes = {
  name: _react.PropTypes.string.isRequired
};

exports.default = Greetings;

},{"react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = require('./root');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _root2.default;

},{"./root":15}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _list2.default;

},{"./list":8}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListInput = function (_React$Component) {
  _inherits(ListInput, _React$Component);

  function ListInput() {
    _classCallCheck(this, ListInput);

    var _this = _possibleConstructorReturn(this, (ListInput.__proto__ || Object.getPrototypeOf(ListInput)).call(this));

    _this.state = { value: '' };

    _this.onChange = _this.onChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(ListInput, [{
    key: 'onChange',
    value: function onChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(event) {
      event.preventDefault();

      this.props.onSubmit(this.state.value);
      this.setState({ value: '' });
    }
  }, {
    key: 'render',
    value: function render() {
      var value = this.state.value;


      return _react2.default.createElement(
        'form',
        { className: 'list-input', onSubmit: this.onSubmit },
        _react2.default.createElement('input', { type: 'text', value: value, onChange: this.onChange }),
        _react2.default.createElement(
          'button',
          { onClick: this.onSubmit },
          'Add Item'
        )
      );
    }
  }]);

  return ListInput;
}(_react2.default.Component);

ListInput.propTypes = {
  onSubmit: _react.PropTypes.func.isRequired
};

exports.default = ListInput;

},{"react":"react"}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItems = function ListItems(_ref) {
  var items = _ref.items;
  return _react2.default.createElement(
    "ul",
    { className: "list-items" },
    items.map(function (item, index) {
      return (
        // eslint-disable-next-line react/no-array-index-key
        _react2.default.createElement(
          "li",
          { key: index },
          item
        )
      );
    })
  );
};

ListItems.propTypes = {
  items: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired
};

exports.default = ListItems;

},{"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _listInput = require('./list-input');

var _listInput2 = _interopRequireDefault(_listInput);

var _listItems = require('./list-items');

var _listItems2 = _interopRequireDefault(_listItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this));

    _this.state = { items: [] };

    _this.onClear = _this.onClear.bind(_this);
    _this.onInput = _this.onInput.bind(_this);
    return _this;
  }

  _createClass(List, [{
    key: 'onInput',
    value: function onInput(name) {
      this.setState({
        items: [].concat(_toConsumableArray(this.state.items), [name])
      });
    }
  }, {
    key: 'onClear',
    value: function onClear() {
      this.setState({ items: [] });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'list' },
        _react2.default.createElement(
          'h1',
          null,
          'List'
        ),
        _react2.default.createElement(_listInput2.default, { onSubmit: this.onInput }),
        _react2.default.createElement(
          'button',
          { onClick: this.onClear },
          'Clear List'
        ),
        _react2.default.createElement(_listItems2.default, { items: this.state.items })
      );
    }
  }]);

  return List;
}(_react2.default.Component);

exports.default = List;

},{"./list-input":6,"./list-items":7,"react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nestedList = require('./nested-list');

var _nestedList2 = _interopRequireDefault(_nestedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _nestedList2.default;

},{"./nested-list":14}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDispatchToProps = exports.mapStateToProps = undefined;

var _nestedList = require('../../actions/nested-list');

var mapStateToProps = exports.mapStateToProps = function mapStateToProps(_ref) {
  var nestedList = _ref.nestedList;
  return { data: nestedList };
};

var mapDispatchToProps = exports.mapDispatchToProps = { clearData: _nestedList.clearData };

},{"../../actions/nested-list":2}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDispatchToProps = undefined;

var _nestedList = require('../../actions/nested-list');

/* eslint-disable import/prefer-default-export */

var mapDispatchToProps = exports.mapDispatchToProps = { updateData: _nestedList.updateDataAsync };

},{"../../actions/nested-list":2}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _underscore = require('underscore');

var _nestedListInputConnector = require('./nested-list-input-connector');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NestedListInput = function (_React$Component) {
  _inherits(NestedListInput, _React$Component);

  function NestedListInput() {
    _classCallCheck(this, NestedListInput);

    var _this = _possibleConstructorReturn(this, (NestedListInput.__proto__ || Object.getPrototypeOf(NestedListInput)).call(this));

    _this.onChange = _this.onChange.bind(_this);
    _this.updateData = (0, _underscore.debounce)(_this.updateData.bind(_this), 200);
    return _this;
  }

  _createClass(NestedListInput, [{
    key: 'onChange',
    value: function onChange(event) {
      var value = event.target.value;


      this.props.onChange(value);
      this.updateData(value);
    }
  }, {
    key: 'updateData',
    value: function updateData(value) {
      try {
        this.props.updateData(JSON.parse(value));
      } catch (e) {
        this.props.updateData([]);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'nested-list-input' },
        _react2.default.createElement(
          'div',
          null,
          'Please enter valid JSON'
        ),
        _react2.default.createElement('textarea', {
          className: 'nested-list-input__field',
          value: this.props.value,
          onChange: this.onChange
        })
      );
    }
  }]);

  return NestedListInput;
}(_react2.default.Component);

NestedListInput.propTypes = {
  value: _react.PropTypes.string.isRequired,
  onChange: _react.PropTypes.func.isRequired,
  updateData: _react.PropTypes.func.isRequired
};

// We introduce mapDispatchToProps here to create the scenario of nested
// redux-connected components. We could also have passed the updateData action
// from the parent.
exports.default = (0, _reactRedux.connect)(null, _nestedListInputConnector.mapDispatchToProps)(NestedListInput);

},{"./nested-list-input-connector":11,"react":"react","react-redux":"react-redux","underscore":"underscore"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NestedListItem = function NestedListItem(_ref) {
  var data = _ref.data;

  if (data === true || data === false || data === null) {
    return _react2.default.createElement(
      'span',
      null,
      JSON.stringify(data)
    );
  }

  if (typeof data === 'string' || typeof data === 'number') {
    return _react2.default.createElement(
      'span',
      null,
      data
    );
  }

  if (Array.isArray(data)) {
    return _react2.default.createElement(
      'ul',
      { className: 'nested-list-item nested-list-item--array' },
      data.map(function (item, index) {
        return (
          // eslint-disable-next-line react/no-array-index-key
          _react2.default.createElement(
            'li',
            { key: index },
            _react2.default.createElement(NestedListItem, { data: item })
          )
        );
      })
    );
  }

  return _react2.default.createElement(
    'div',
    { className: 'nested-list-item nested-list-item--object' },
    Object.keys(data).map(function (key) {
      return _react2.default.createElement(
        'div',
        { key: key, className: 'nested-list-item__pair' },
        _react2.default.createElement(
          'div',
          { className: 'nested-list-item__pair-key' },
          key + ': '
        ),
        _react2.default.createElement(NestedListItem, { data: data[key] })
      );
    })
  );
};

NestedListItem.propTypes = {
  data: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.object, _react.PropTypes.string])
};

NestedListItem.defaultProps = {
  data: []
};

exports.default = NestedListItem;

},{"react":"react"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _nestedListConnector = require('./nested-list-connector');

var _nestedListInput = require('./nested-list-input');

var _nestedListInput2 = _interopRequireDefault(_nestedListInput);

var _nestedListItem = require('./nested-list-item');

var _nestedListItem2 = _interopRequireDefault(_nestedListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NestedList = function (_React$Component) {
  _inherits(NestedList, _React$Component);

  function NestedList() {
    _classCallCheck(this, NestedList);

    var _this = _possibleConstructorReturn(this, (NestedList.__proto__ || Object.getPrototypeOf(NestedList)).call(this));

    _this.state = {
      inputValue: ''
    };

    _this.clearData = _this.clearData.bind(_this);
    _this.updateInputValue = _this.updateInputValue.bind(_this);
    return _this;
  }

  _createClass(NestedList, [{
    key: 'clearData',
    value: function clearData() {
      this.props.clearData();
      this.setState({ inputValue: '' });
    }
  }, {
    key: 'updateInputValue',
    value: function updateInputValue(inputValue) {
      this.setState({ inputValue: inputValue });
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.props.data,
          inputValue = this.state.inputValue,
          clearData = this.clearData,
          updateInputValue = this.updateInputValue;


      return _react2.default.createElement(
        'div',
        { className: 'nested-list' },
        _react2.default.createElement(
          'h1',
          null,
          'Nested List'
        ),
        _react2.default.createElement(_nestedListInput2.default, { value: inputValue, onChange: updateInputValue }),
        _react2.default.createElement(
          'button',
          { onClick: clearData },
          'Clear List'
        ),
        _react2.default.createElement(_nestedListItem2.default, { data: data })
      );
    }
  }]);

  return NestedList;
}(_react2.default.Component);

NestedList.propTypes = {
  data: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.object, _react.PropTypes.string]),
  clearData: _react.PropTypes.func.isRequired
};

NestedList.defaultProps = {
  data: []
};

exports.default = (0, _reactRedux.connect)(_nestedListConnector.mapStateToProps, _nestedListConnector.mapDispatchToProps)(NestedList);

},{"./nested-list-connector":10,"./nested-list-input":12,"./nested-list-item":13,"react":"react","react-redux":"react-redux"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _store = require('../lib/store');

var _store2 = _interopRequireDefault(_store);

var _withStore = require('../lib/with-store');

var _withStore2 = _interopRequireDefault(_withStore);

var _greetings = require('./greetings');

var _greetings2 = _interopRequireDefault(_greetings);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _nestedList = require('./nested-list');

var _nestedList2 = _interopRequireDefault(_nestedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root() {
  return _react2.default.createElement(
    'div',
    { className: 'root' },
    _react2.default.createElement(_greetings2.default, { name: 'World' }),
    _react2.default.createElement(
      'div',
      { className: 'root-content' },
      _react2.default.createElement(_list2.default, null),
      _react2.default.createElement(_nestedList2.default, null)
    )
  );
};

exports.default = (0, _withStore2.default)(_store2.default)(Root);

},{"../lib/store":21,"../lib/with-store":22,"./greetings":3,"./list":5,"./nested-list":9,"react":"react"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CLEAR_NESTED_LIST = exports.CLEAR_NESTED_LIST = 'CLEAR_NESTED_LIST';
var UPDATE_NESTED_LIST = exports.UPDATE_NESTED_LIST = 'UPDATE_NESTED_LIST';

},{}],17:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_components2.default, null), document.getElementById('root'));

},{"./components":4,"react":"react","react-dom":"react-dom"}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// We export mockable logging functions to prevent stubbing the console object
// in tests. Stubbing the console object causes issues in test reporting.

/* eslint-disable no-console */

var log = exports.log = console.log.bind(console);

var error = exports.error = console.error.bind(console);

},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var middlewares = [_reduxThunk2.default].concat(_toConsumableArray("production" === 'development' ? [_logger2.default] : []));

exports.default = middlewares;

},{"./logger":20,"redux-thunk":1}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _log = require('../log');

var logger = function logger(store) {
  return function (next) {
    return function (action) {
      (0, _log.log)('dispatching', action);

      var result = next(action);

      (0, _log.log)('next state', store.getState());

      return result;
    };
  };
};

exports.default = logger;

},{"../log":18}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _middlewares = require('./middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var store = (0, _redux.createStore)(_reducers2.default, _redux.applyMiddleware.apply(undefined, _toConsumableArray(_middlewares2.default)));

exports.default = store;

},{"../reducers":23,"./middlewares":19,"redux":"redux"}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withStore = function withStore(store) {
  return function (BaseComponent) {
    var WithStore = function WithStore() {
      for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
        props[_key] = arguments[_key];
      }

      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(BaseComponent, props)
      );
    };

    // Following convention of connect() in redux
    WithStore.WrappedComponent = BaseComponent;

    return WithStore;
  };
};

exports.default = withStore;

},{"react":"react","react-redux":"react-redux"}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = require('./root');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _root2.default;

},{"./root":25}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require('../constants/action-types');

var initialState = [];

var nestedList = function nestedList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.CLEAR_NESTED_LIST:
      return initialState;

    case _actionTypes.UPDATE_NESTED_LIST:
      return action.payload;

    default:
      return state;
  }
};

exports.default = nestedList;

},{"../constants/action-types":16}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _nestedList = require('./nested-list');

var _nestedList2 = _interopRequireDefault(_nestedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = (0, _redux.combineReducers)({
  nestedList: _nestedList2.default
});

exports.default = root;

},{"./nested-list":24,"redux":"redux"}]},{},[17]);
