function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFaxFill = function SvgFaxFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M320-160v-640h400v200h160v440H320ZM80-120h210v-520H80v520Zm300-480h280v-140H380v140Zm30 320h140v-200H410v200Zm180-120h80v-80h-80v80Zm120 0h80v-80h-80v80ZM590-280h80v-80h-80v80Zm120 0h80v-80h-80v80Z",
    fill: "currentColor"
  }));
};
export default SvgFaxFill;