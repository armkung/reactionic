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

var IonButton = _react2.default.createClass({
  displayName: 'IonButton',

  propTypes: {
    link: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
    href: _react2.default.PropTypes.string,
    target: _react2.default.PropTypes.string,
    customClasses: _react2.default.PropTypes.string,
    expand: _react2.default.PropTypes.oneOf(['full', 'block']),
    size: _react2.default.PropTypes.oneOf(['small', 'large']),
    type: _react2.default.PropTypes.oneOf(['outline', 'clear', 'icon-clear']),
    icon: _react2.default.PropTypes.string,
    iconPosition: _react2.default.PropTypes.oneOf(['left', 'right']),
    color: _react2.default.PropTypes.string,
    onClick: _react2.default.PropTypes.func,
    backButton: _react2.default.PropTypes.bool,
    htmlType: _react2.default.PropTypes.oneOf(['submit', 'button', 'reset']) // the value to put in <button type="???">
  },
  getDefaultProps: function getDefaultProps() {
    return {
      link: null,
      href: null,
      target: null,
      customClasses: '',
      expand: null,
      size: null,
      type: null,
      icon: null,
      iconPosition: null,
      color: '',
      onClick: null,
      backButton: false,
      htmlType: null };
  },
  contextTypes: {
    ionSetTransitionDirection: _react2.default.PropTypes.func,
    router: _react2.default.PropTypes.object
  },
  onClick: function onClick(e) {
    if (this.props.backButton) {
      // set the transitionDirection for backward animation
      this.context.ionSetTransitionDirection('back');

      // execute possible other onclick function
      if (this.props.onClick) {
        this.props.onClick(e);
      }

      // if history is set, go to previous location
      if (!this.props.link && this.context.router) {
        this.context.router.goBack();
      }
      // return false to prevent defaults
      return false;
    } else if (this.props.onClick) {
      this.props.onClick(e);
    }
  },
  render: function render() {
    var colorClass = this.props.color ? 'button-' + this.props.color : null;
    var classes = (0, _classnames2.default)({ 'button': true,
      'button-block': this.props.expand === 'block',
      'button-full': this.props.expand === 'full',
      'button-small': this.props.size === 'small',
      'button-large': this.props.size === 'large',
      'button-outline': this.props.type === 'outline',
      'button-clear': this.props.type === 'clear',
      'icon-left': this.props.iconPosition === 'left',
      'icon-right': this.props.iconPosition === 'right',
      'icon': !this.props.iconPosition && this.props.icon,
      'button-icon': !this.props.children && this.props.icon && this.props.type === 'icon-clear'
    }, this.props.icon, colorClass, this.props.customClasses);
    var button;
    if (this.props.link) {
      button = _react2.default.createElement(
        _reactRouter.Link,
        { className: classes, to: this.props.link, onClick: this.onClick },
        this.props.children
      );
    } else if (this.props.href) {
      button = _react2.default.createElement(
        'a',
        { className: classes, href: this.props.href, target: this.props.target, onClick: this.onClick },
        this.props.children
      );
    } else {
      button = _react2.default.createElement(
        'button',
        { type: this.props.htmlType, className: classes, onClick: this.onClick },
        this.props.children
      );
    }
    return button;
  }
});

exports.default = IonButton;