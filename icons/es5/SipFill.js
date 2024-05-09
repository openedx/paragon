function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSipFill = function SvgSipFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M453-357h60v-246h-60v246Zm120 0h50v-89h150v-157H573v246Zm-387 0h200v-148H236v-48h150v-50H186v148h150v48H186v50Zm437-139v-57h100v57H623ZM80-160v-640h800v640H80Z",
    fill: "currentColor"
  }));
};
export default SvgSipFill;