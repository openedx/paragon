function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPropaneFill = function SvgPropaneFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M390-720h180v-50H390v50ZM280-120v-120q-100 0-170-70T40-480q0-100 70-170t170-70h40v-120h320v120h40q100 0 170 70t70 170q0 100-70 170t-170 70v120h-60v-120H340v120h-60Z",
    fill: "currentColor"
  }));
};
export default SvgPropaneFill;