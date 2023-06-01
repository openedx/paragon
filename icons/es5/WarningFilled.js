function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgWarningFilled(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2L1 21h22L12 2z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 16h-2v2h2v-2zM13 10h-2v4h2v-4z",
    fill: "currentColor"
  }));
}
export default SvgWarningFilled;