function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgGrid3X3Fill = function SvgGrid3X3Fill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M333-160v-173H160v-60h173v-174H160v-60h173v-173h60v173h174v-173h60v173h173v60H627v174h173v60H627v173h-60v-173H393v173h-60Zm60-233h174v-174H393v174Z",
    fill: "currentColor"
  }));
};
export default SvgGrid3X3Fill;