function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgOpacityFill = function SvgOpacityFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-120q-133 0-226.5-90.5T160-434q0-66 25.5-123T255-658l225-222 225 222q44 44 69.5 101T800-434q0 133-93.5 223.5T480-120ZM223-400h514q13-69-15-127t-56-85L480-795 294-612q-28 27-56 85t-15 127Z",
    fill: "currentColor"
  }));
};
export default SvgOpacityFill;