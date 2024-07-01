function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgContactsFill = function SvgContactsFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M144-40v-60h672v60H144Zm0-820v-60h672v60H144Zm336 416q50 0 84-34t34-84q0-50-34-84t-84-34q-50 0-84 34t-34 84q0 50 34 84t84 34ZM72-160v-640h816v640H72Zm148-60h520q-49-63-120.5-94.5T480-346q-69 0-139 31.5T220-220Z",
    fill: "currentColor"
  }));
};
export default SvgContactsFill;