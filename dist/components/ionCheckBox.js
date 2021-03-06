'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IonCheckBox = _react2.default.createClass({
  displayName: 'IonCheckBox',

  propTypes: {
    'checked': _react2.default.PropTypes.bool,
    'handleChange': _react2.default.PropTypes.func,
    'color': _react2.default.PropTypes.string,
    'customClasses': _react2.default.PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      'checked': false,
      'handleChange': function handleChange() {},
      'color': 'stable',
      'customClasses': ''
    };
  },
  getInitialState: function getInitialState() {
    return {
      checked: this.props.checked
    };
  },
  handleChange: function handleChange(event) {
    var toggle = this.state.checked ? false : true;
    if (this.props.handleChange) this.props.handleChange(toggle);
    this.setState({
      checked: toggle
    });
  },
  render: function render() {
    var classes = (0, _classnames2.default)({ 'checkbox': true }, 'checkbox-' + this.props.color, this.props.customClasses);
    return _react2.default.createElement(
      'div',
      { className: classes },
      _react2.default.createElement('input', { type: 'checkbox', checked: this.state.checked, onChange: this.handleChange })
    );
  }
});

exports.default = IonCheckBox;