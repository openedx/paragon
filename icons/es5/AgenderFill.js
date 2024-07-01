function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAgenderFill = function SvgAgenderFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-120q-100 0-170-70t-70-170q0-93 60.5-160T450-598v-242h60v242q90 11 150 78t60 160q0 100-70 170t-170 70Zm0-60q68 0 117-43t60-107H303q11 64 60.5 107T480-180ZM302-390h356q-11-65-60.5-107.5T480-540q-67 0-117 42.5T302-390Z",
    fill: "currentColor"
  }));
};
export default SvgAgenderFill;