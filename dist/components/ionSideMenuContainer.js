'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _snapjs = require('snapjs');

var _snapjs2 = _interopRequireDefault(_snapjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonSideMenuContainer = _react2.default.createClass({
  displayName: 'IonSideMenuContainer',

  contextTypes: {
    ionSetSnapper: _react2.default.PropTypes.func
  },
  propTypes: {
    settings: _react2.default.PropTypes.object
  },
  getDefaultProps: function getDefaultProps() {
    return {
      settings: {}
    };
  },
  componentDidMount: function componentDidMount() {
    var sideMenuContent = document.getElementById('IonSideMenuContent');
    var snapper = new _snapjs2.default(_extends({
      element: sideMenuContent
    }, this.props.settings));
    if (typeof snapper.toggle === 'undefined') {
      // add a toggle method if it doesn't exist yet (in some future version)
      snapper.toggle = function (direction) {
        if (this.state().state == direction) {
          this.close();
        } else {
          this.open(direction);
        }
      };
    }
    this.context.ionSetSnapper(snapper);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.context.ionSetSnapper(null);
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      this.props.children
    );
  }
});

exports.default = IonSideMenuContainer;