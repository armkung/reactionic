'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonItem = _react2.default.createClass({
  displayName: 'IonItem',

  propTypes: {
    'link': _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
    href: _react2.default.PropTypes.string,
    target: _react2.default.PropTypes.string,
    'wrap': _react2.default.PropTypes.bool,
    'divider': _react2.default.PropTypes.bool,
    'iconLeft': _react2.default.PropTypes.bool,
    'iconRight': _react2.default.PropTypes.bool,
    'avatar': _react2.default.PropTypes.bool,
    'image': _react2.default.PropTypes.bool,
    'body': _react2.default.PropTypes.bool,
    'input': _react2.default.PropTypes.bool,
    'buttonRight': _react2.default.PropTypes.bool,
    'buttonLeft': _react2.default.PropTypes.bool,
    'thumbnailLeft': _react2.default.PropTypes.bool,
    'thumbnailRight': _react2.default.PropTypes.bool,
    'checkboxLeft': _react2.default.PropTypes.bool,
    'checkboxRight': _react2.default.PropTypes.bool,
    'customClasses': _react2.default.PropTypes.string,
    'onClick': _react2.default.PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      'link': null,
      href: null,
      target: null,
      'wrap': false,
      'divider': false,
      'iconLeft': false,
      'iconRight': false,
      'avatar': false,
      'image': false,
      'body': false,
      'input': false,
      'buttonRight': false,
      'buttonLeft': false,
      'thumbnailLeft': false,
      'thumbnailRight': false,
      'checkboxLeft': false,
      'checkboxRight': false,
      'customClasses': '',
      'onClick': null
    };
  },
  render: function render() {
    var classes = (0, _classnames2.default)({ 'item': true,
      'item-text-wrap': this.props.wrap,
      'item-divider': this.props.divider,
      'item-icon-left': this.props.iconLeft,
      'item-icon-right': this.props.iconRight,
      'item-avatar': this.props.avatar,
      'item-image': this.props.image,
      'item-body': this.props.body,
      'item-input': this.props.input,
      'item-button-right': this.props.buttonRight,
      'item-button-left': this.props.buttonLeft,
      'item-thumbnail-left': this.props.thumbnailLeft,
      'item-thumbnail-right': this.props.thumbnailRight,
      'item-checkbox': this.props.checkboxLeft || this.props.checkboxRight,
      'item-checkbox-right': this.props.checkboxRight
    }, this.props.customClasses);
    var item;
    if (this.props.link) {
      item = _react2.default.createElement(
        _reactRouter.Link,
        { className: classes, to: this.props.link, onClick: this.props.onClick },
        this.props.children
      );
    } else if (this.props.href) {
      item = _react2.default.createElement(
        'a',
        { className: classes, href: this.props.href, target: this.props.target, onClick: this.props.onClick },
        this.props.children
      );
    } else {
      item = _react2.default.createElement(
        'div',
        { className: classes, onClick: this.props.onClick },
        this.props.children
      );
    }
    return item;
  }
});

exports.default = IonItem;