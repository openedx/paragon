function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgEdaFill = function SvgEdaFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-40v-280h235l128 170 166-167 175-104 92 68L603-40H120Zm167-450v-390h60v390h106.5v-430H513v430h106.5v-350H680v408L488-241 385-380H120v-420h60v310h107Z",
    fill: "currentColor"
  }));
};
export default SvgEdaFill;