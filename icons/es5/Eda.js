function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgEda = function SvgEda(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M287-490v-390h60v390h-60Zm166 0v-430h60v430h-60Zm167 188v-538h60v503l-60 35ZM180-100h397l250-251-344 201-128-170H180v220Zm-60 60v-340h264.92L497-230l183-107 145-84 91 68L603-40H120Zm60-340h-60v-420h60v420Zm0-110h440-440Zm0 390h397-397Z",
    fill: "currentColor"
  }));
};
export default SvgEda;