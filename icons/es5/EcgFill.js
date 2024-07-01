function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgEcgFill = function SvgEcgFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-510v-290h800v355q-17-8-34.5-12t-35.5-4q-24 0-47 7t-43 20q-12-8-24-13t-26-8v-55H539l-72-144q-4-8-11.5-11t-15.5-3q-8 0-15.5 3T413-654L280-387l-53-107q-4-8-11.5-12t-15.5-4H80Zm0 350v-290h101l72 144q4 8 11.5 12t15.5 4q8 0 15.5-4t11.5-12l133-267 53 107q4 8 11.5 12t15.5 4h53q-50 18-81.5 61T460-290q0 42 15.5 71.5T520-160H80Zm550-240q27 0 50 12t40 35q17-23 40-35t50-12q46 0 78 32t32 78q0 36-26 69.5T780-112l-60 52-60-52q-88-75-114-108.5T520-290q0-46 32-78t78-32Z",
    fill: "currentColor"
  }));
};
export default SvgEcgFill;