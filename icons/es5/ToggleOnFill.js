function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgToggleOnFill = function SvgToggleOnFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm400.94-139q42.06 0 71.56-29.44t29.5-71.5q0-42.06-29.44-71.56t-71.5-29.5q-42.06 0-71.56 29.44t-29.5 71.5q0 42.06 29.44 71.56t71.5 29.5Z",
    fill: "currentColor"
  }));
};
export default SvgToggleOnFill;