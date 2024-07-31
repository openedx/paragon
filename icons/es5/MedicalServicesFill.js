function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMedicalServicesFill = function SvgMedicalServicesFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-80v-640h240v-160h320v160h240v640H80Zm300-640h200v-100H380v100Zm70 350v120h60v-120h120v-60H510v-120h-60v120H330v60h120Z",
    fill: "currentColor"
  }));
};
export default SvgMedicalServicesFill;