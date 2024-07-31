function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCabinFill = function SvgCabinFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M220-180h520v-100H220v100Zm0-160h520v-100H220v100Zm0-160h520v-67l-43-33H264l-44 33v67Zm123-160h275L480-765 343-660ZM160-120v-401l-84 64-36-48 120-91v-124h60v78l260-198 440 336-36 47-84-64v401H160Zm0-640q0-46 32.5-78t77.5-32q21 0 35.5-15t14.5-35h60q0 45-32 77.5T270-810q-20 0-35 14.5T220-760h-60Z",
    fill: "currentColor"
  }));
};
export default SvgCabinFill;