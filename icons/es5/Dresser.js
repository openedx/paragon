function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDresser = function SvgDresser(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-120v-660q0-24.75 17.63-42.38Q195.25-840 220-840h520q24.75 0 42.38 17.62Q800-804.75 800-780v660h-60v-80H220v80h-60Zm60-400h230v-260H220v260Zm290-160h230v-100H510v100Zm0 160h230v-100H510v100ZM410-330h140v-60H410v60ZM220-460v200h520v-200H220Zm0 0v200-200Z",
    fill: "currentColor"
  }));
};
export default SvgDresser;