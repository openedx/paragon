function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFlashAutoFill = function SvgFlashAutoFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M200-80v-320H80v-480h400l-80 280h160L200-80Zm367-434 150-385h53l150 385h-56l-43-112H666l-43 112h-56Zm115-159h123l-54-148h-15l-54 148Z",
    fill: "currentColor"
  }));
};
export default SvgFlashAutoFill;