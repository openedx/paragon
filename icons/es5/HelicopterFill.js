function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHelicopterFill = function SvgHelicopterFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M370-430v-270h-10q-109 0-184.5 76T100-440v10h270ZM520-80H120v-60h400v60Zm80-120H40v-240q0-134 93-227t227-93h240v200h200l40-80h80v280l-320 34v126Zm160-620H120v-60h640v60Z",
    fill: "currentColor"
  }));
};
export default SvgHelicopterFill;