'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IonModalContainer = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonModalContainer = _react2.default.createClass({
  displayName: 'IonModalContainer',

  // this component need to be attached to the DOM before the Modal enters
  // otherwise the transaitions won't work
  propTypes: {
    animation: _react2.default.PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      animation: 'slide-in-up'
    };
  },
  render: function render() {
    return _react2.default.createElement(
      _reactAddonsCssTransitionGroup2.default,
      {
        component: 'div',
        transitionEnterTimeout: 400,
        transitionLeaveTimeout: 250,
        transitionName: 'modal',
        className: "modal-" + this.props.animation
      },
      this.props.children
    );
  }
});

var IonModal = _react2.default.createClass({
  displayName: 'IonModal',

  propTypes: {
    customClasses: _react2.default.PropTypes.string,
    customTemplate: _react2.default.PropTypes.bool,
    title: _react2.default.PropTypes.string,
    closeText: _react2.default.PropTypes.string,
    focusFirstInput: _react2.default.PropTypes.bool,
    barClasses: _react2.default.PropTypes.string,
    padding: _react2.default.PropTypes.bool
  },
  getDefaultProps: function getDefaultProps() {
    return {
      customClasses: '',
      customTemplate: false,
      title: '',
      closeText: '',
      focusFirstInput: true,
      barClasses: 'bar-stable',
      padding: true
    };
  },
  contextTypes: {
    ionShowModal: _react2.default.PropTypes.func,
    ionKeyboardHeight: _react2.default.PropTypes.number,
    ionPlatform: _react2.default.PropTypes.object
  },
  backdropClicked: function backdropClicked(e) {
    if (e.target.className.indexOf("modal-backdrop") >= 0) {
      // if clicked on backdrop outside of the modal, close modal
      e.preventDefault();
      this.context.ionShowModal(false);
    }
  },
  componentDidMount: function componentDidMount() {
    if (this.props.focusFirstInput) {
      var input = document.querySelector("input"); // select first input
      input && input.focus();
    }
  },
  render: function render() {
    var _this = this;

    var classes = (0, _classnames2.default)({ 'modal': true }, this.props.customClasses);
    var backdropClasses = (0, _classnames2.default)({ 'modal-backdrop': true,
      'active': this.props.children });
    var barClasses = (0, _classnames2.default)('bar bar-header', this.props.barClasses);
    var titleClasses = (0, _classnames2.default)({ 'title': true,
      'title-left': this.context.ionPlatform.isAndroid });
    var closeButton;
    if (this.props.closeText) {
      closeButton = _react2.default.createElement(
        'button',
        { onClick: function onClick() {
            return _this.context.ionShowModal(false);
          }, className: 'button button-positive button-clear' },
        this.props.closeText
      );
    } else {
      closeButton = _react2.default.createElement(
        'button',
        { onClick: function onClick() {
            return _this.context.ionShowModal(false);
          }, className: 'button button-icon' },
        _react2.default.createElement('i', { className: 'icon ion-ios-close-empty' })
      );
    }
    var contents;
    if (this.props.customTemplate) {
      contents = _react2.default.createElement(
        'div',
        { className: classes },
        this.props.children
      );
    } else {
      contents = _react2.default.createElement(
        'div',
        { className: classes },
        _react2.default.createElement(
          'div',
          { className: barClasses },
          _react2.default.createElement(
            'h2',
            { className: titleClasses },
            this.props.title
          ),
          closeButton
        ),
        _react2.default.createElement(
          'div',
          { className: 'content has-header overflow-scroll' },
          this.props.padding ? _react2.default.createElement(
            'div',
            { className: 'padding' },
            this.props.children
          ) : this.props.children
        )
      );
    }
    return _react2.default.createElement(
      'div',
      { className: backdropClasses, onClick: this.backdropClicked },
      _react2.default.createElement(
        'div',
        { className: 'modal-wrapper' },
        contents
      )
    );
  }
});

exports.default = IonModal;
exports.IonModalContainer = IonModalContainer;

// @@@@@@@@@@@@@@@@ implement dynamic stuff ???

// Fix default template, see Meteoric