function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgHighQuality(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 4H3v16h18V4zM11 15H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7 0h-1.75v1.5h-1.5V15H13V9h5v6zm-3.5-1.5h2v-3h-2v3z",
    fill: "currentColor"
  }));
}
export default SvgHighQuality;