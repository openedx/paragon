function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgFeedbackOutline(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 2H2.01v2L2 22l4-4h16V4 2zm-2 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2v-2zm0-6h2v4h-2V6z",
    fill: "currentColor"
  }));
}
export default SvgFeedbackOutline;