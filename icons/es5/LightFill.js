function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLightFill = function SvgLightFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-120q-63 0-106.5-43.5T330-270H125q-2-15-3.5-29t-1.5-31q0-152 93.5-258T450-705v-135h60v135q143 11 236.5 117T840-330q0 17-1.5 31t-3.5 29H630q0 63-43.5 106.5T480-120ZM180-330h600q0-132-87.5-223.5T480-645q-125 0-212.5 91.5T180-330Z",
    fill: "currentColor"
  }));
};
export default SvgLightFill;