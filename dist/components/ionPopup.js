'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _timeout = require('../helpers/timeout');

var _timeout2 = _interopRequireDefault(_timeout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonPopup = _react2.default.createClass({
  displayName: 'IonPopup',

  propTypes: {},
  getInitialState: function getInitialState() {
    return {
      isUp: false,
      closing: false,
      callback: function callback() {},
      inputValue: '' // needed for prompt
    };
  },
  contextTypes: {
    ionPopup: _react2.default.PropTypes.object,
    ionUpdatePopup: _react2.default.PropTypes.func
  },
  buttonClicked: function buttonClicked(e, callback) {
    e && e.stopPropagation();
    this.close(callback);
  },
  close: function close(callback) {
    if (this.state.isUp) {
      this.setState({ closing: true, callback: callback });
    }
  },
  mixins: [_timeout2.default],
  componentDidUpdate: function componentDidUpdate(prevProps, prevState, prevContext) {
    if (_lodash2.default.isEmpty(prevContext.ionPopup) && !_lodash2.default.isEmpty(this.context.ionPopup)) {
      // show popup
      this.setState({ isUp: true });
    }
    if (this.state.isUp && !prevState.closing && this.state.closing) {
      var self = this;
      var handler = function handler() {
        self.setState({ isUp: false });
        self.setState({ closing: false });
        self.context.ionUpdatePopup({});
        if (typeof self.state.callback === 'function') {
          self.state.callback();
        }
      };
      this.setTimeout(handler, 100);
    }
  },
  handleFormChange: function handleFormChange(e) {
    // needed for prompt
    this.setState({ inputValue: e.target.value });
  },
  render: function render() {
    var _this = this;

    var ionPopup = this.context.ionPopup;

    var willMount = true;
    if (_lodash2.default.isEmpty(ionPopup)) willMount = false;

    var title = ionPopup.title;
    var subTitle = ionPopup.subTitle;
    var template = ionPopup.template;
    var buttons = ionPopup.buttons;
    var cancel = ionPopup.cancel;
    var popupType = ionPopup.popupType;
    var customClasses = ionPopup.customClasses;
    var ionUpdatePopup = this.context.ionUpdatePopup;
    var onclickCancel = function onclickCancel(e) {
      _this.cancelAction(e);
    };

    switch (popupType) {
      case 'alert':
        buttons = [{
          text: ionPopup.okText ? ionPopup.okText : 'Ok',
          type: ionPopup.okType ? ionPopup.okType : 'button-positive',
          onTap: function onTap(event) {
            if (ionPopup.onOk) ionPopup.onOk(event);
            return true;
          }
        }];
        break;
      case 'confirm':
        buttons = [{
          text: ionPopup.cancelText ? ionPopup.cancelText : 'Cancel',
          type: ionPopup.cancelType ? ionPopup.cancelType : 'button-default',
          onTap: function onTap(event) {
            if (ionPopup.onCancel) ionPopup.onCancel(event);
            return true;
          }
        }, {
          text: ionPopup.okText ? ionPopup.okText : 'Ok',
          type: ionPopup.okType ? ionPopup.okType : 'button-positive',
          onTap: function onTap(event) {
            if (ionPopup.onOk) ionPopup.onOk(event);
            return true;
          }
        }];
        break;
      case 'prompt':
        template = _react2.default.createElement(
          'span',
          { className: 'popup-prompt-text' },
          template
        );

        ionPopup.inputType = ionPopup.inputType || 'text';
        ionPopup.inputPlaceholder = ionPopup.inputPlaceholder || '';
        template = _react2.default.createElement(
          'span',
          null,
          template,
          _react2.default.createElement('input', { type: ionPopup.inputType, placeholder: ionPopup.inputPlaceholder, value: this.state.inputValue, onChange: this.handleFormChange })
        );
        var self = this;
        buttons = [{
          text: ionPopup.cancelText ? ionPopup.cancelText : 'Cancel',
          type: ionPopup.cancelType ? ionPopup.cancelType : 'button-default',
          onTap: function onTap(event) {
            if (ionPopup.onCancel) ionPopup.onCancel(event);
            return true;
          }
        }, {
          text: ionPopup.okText ? ionPopup.okText : 'Ok',
          type: ionPopup.okType ? ionPopup.okType : 'button-positive',
          onTap: function onTap(event) {
            if (ionPopup.onOk) ionPopup.onOk(event, self.state.inputValue);
            return true;
          }
        }];

        break;
      default:
      // we assume the type is 'show', no need to do anything
    }

    var head = null;
    if (title || subTitle) {
      head = _react2.default.createElement(
        'div',
        { className: 'popup-head' },
        title ? _react2.default.createElement(
          'h3',
          { className: 'popup-title' },
          title
        ) : null,
        subTitle ? _react2.default.createElement(
          'h5',
          { className: 'popup-sub-title' },
          subTitle
        ) : null
      );
    }
    if (template) {
      template = _react2.default.createElement(
        'div',
        { className: 'popup-body' },
        template
      );
    }
    if (buttons) {
      (function () {
        var self = _this;
        buttons = buttons.map(function (button, idx) {
          if (button.text) {
            var _ret2 = function () {
              var buttonClass = (0, _classnames2.default)('button', button.type);
              var callback = button.onTap;
              return {
                v: _react2.default.createElement(
                  'button',
                  { className: buttonClass, key: idx, onClick: function onClick(e) {
                      return self.buttonClicked(e, callback);
                    } },
                  button.text
                )
              };
            }();

            if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
          } else {
            return null;
          }
        });
        buttons = _react2.default.createElement(
          'div',
          { className: 'popup-buttons' },
          buttons
        );
      })();
    }

    var backdropClasses = (0, _classnames2.default)({ 'backdrop': willMount, 'visible active': this.state.isUp });
    var classes = (0, _classnames2.default)({ 'popup-container': willMount, 'popup-showing': this.state.isUp, 'active': this.state.isUp && !this.state.closing, 'popup-hidden': this.state.closing });
    var popupClasses = (0, _classnames2.default)('popup', customClasses);

    return _react2.default.createElement(
      'div',
      { className: backdropClasses },
      _react2.default.createElement(
        'div',
        { className: classes },
        _react2.default.createElement(
          'div',
          { className: popupClasses },
          head,
          template,
          buttons
        )
      )
    );
  }
});

exports.default = IonPopup;