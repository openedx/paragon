function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStacksFill = function SvgStacksFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-410 41-645l439-235 440 235-440 235Zm0 165L65-467l63-34 352 188 353-188 63 34-416 222Zm0 165L65-302l63-34 352 188 353-188 63 34L480-80Z",
    fill: "currentColor"
  }));
};
export default SvgStacksFill;