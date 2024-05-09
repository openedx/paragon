function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgGarageHome = function SvgGarageHome(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-120v-480l320-240 320 240v480h-60v-450L480-765 220-570v450h-60Zm180-60h280v-110H340v110Zm0-170h280v-110H340v110Zm-60 230v-400h400v400H280Z",
    fill: "currentColor"
  }));
};
export default SvgGarageHome;