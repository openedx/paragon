function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStarRateHalfFill = function SvgStarRateHalfFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-711v324l137 104-55-173 126-82H537l-57-173ZM233-120l93-304L80-600h304l96-320 96 320h304L634-424l93 304-247-188-247 188Z",
    fill: "currentColor"
  }));
};
export default SvgStarRateHalfFill;