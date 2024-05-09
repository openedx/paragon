function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgArrowAndEdgeFill = function SvgArrowAndEdgeFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-120 334-266l42-43 74 74v-225q0-25-17.5-42.5T390-520H40v-320h60v260h290q27 0 50 11t40 30q17-19 40-30t50-11h290v-260h60v320H570q-25 0-42.5 17.5T510-460v225l74-73 42 42-146 146Z",
    fill: "currentColor"
  }));
};
export default SvgArrowAndEdgeFill;