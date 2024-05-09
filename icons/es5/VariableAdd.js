function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgVariableAdd = function SvgVariableAdd(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M600-280H120v-400h720v160h-60v-100H180v280h420v60Zm-420-60v-280 280Zm600 180v-120H660v-60h120v-120h60v120h120v60H840v120h-60Z",
    fill: "currentColor"
  }));
};
export default SvgVariableAdd;