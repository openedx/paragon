function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSpecialCharacter = function SvgSpecialCharacter(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-100h245q-102-37-163.5-124.5T140-540q0-142 99-241t241-99q142 0 241 99t99 241q0 108-61.5 195.5T595-220h245v100H520v-183q88-14 144-81.5T720-540q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 88 56 155.5T440-303v183H120Z",
    fill: "currentColor"
  }));
};
export default SvgSpecialCharacter;