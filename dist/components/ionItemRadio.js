'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonItemRadio = _react2.default.createClass({
  displayName: 'IonItemRadio',

  propTypes: {
    'checked': _react2.default.PropTypes.bool,
    'name': _react2.default.PropTypes.string,
    'value': _react2.default.PropTypes.string,
    'handleChange': _react2.default.PropTypes.func,
    'icon': _react2.default.PropTypes.string,
    'label': _react2.default.PropTypes.string,
    'customClasses': _react2.default.PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      'checked': false,
      'name': 'radio-group',
      'value': '',
      'handleChange': function handleChange() {},
      'icon': 'checkmark',
      'label': '',
      'customClasses': ''
    };
  },
  handleChange: function handleChange(e, value) {
    // to make this work on iOS devices, the input.onChange event
    // was replaced by an onClick event on the label element. 
    e.preventDefault();
    if (this.props.handleChange) this.props.handleChange(this.props.name, value);
  },
  render: function render() {
    var _this = this;

    var classes = (0, _classnames2.default)({ 'item-content': true }, this.props.customClasses);
    var iconClasses = 'radio-icon ion-' + this.props.icon;
    return _react2.default.createElement(
      'label',
      { className: 'item item-radio',
        onClick: function onClick(e) {
          _this.handleChange(e, _this.props.value);
        } },
      _react2.default.createElement('input', { type: 'radio',
        onChange: function onChange() {},
        name: this.props.name,
        checked: this.props.checked }),
      _react2.default.createElement(
        'div',
        { className: 'radio-content' },
        _react2.default.createElement(
          'div',
          { className: classes },
          this.props.label
        ),
        _react2.default.createElement('i', { className: iconClasses })
      )
    );
  }
});

exports.default = IonItemRadio;