function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHttpFill = function SvgHttpFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M40-360v-240h48v85h115v-85h48v240h-48v-107H88v107H40Zm313 0v-192h-80v-48h208v48h-80v192h-48Zm230 0v-192h-80v-48h208v48h-80v192h-48Zm150 0v-240h187v155H781v85h-48Zm48-133h91v-59h-91v59Z",
    fill: "currentColor"
  }));
};
export default SvgHttpFill;