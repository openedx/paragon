function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgBrunchDining(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18 8h2V4h-2v4zm-2 14H2v-2h14v2zm2-6.11l-.4-.42a5.852 5.852 0 01-1.6-4V2h6v9.51c0 1.46-.54 2.87-1.53 3.94l-.47.52V20h2v2h-4v-6.11zM7 16v-2h4v2h5v2H2v-2h5z",
    fill: "currentColor"
  }));
}
export default SvgBrunchDining;