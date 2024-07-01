function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSpeechToText = function SvgSpeechToText(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M690-570q-29 0-49.5-20.5T620-640v-160q0-29 20.5-49.5T690-870q29 0 49.5 20.5T760-800v160q0 29-20.5 49.5T690-570ZM120-80v-800h400v60H180v680h480v-110h60v170H120Zm160-170v-60h280v60H280Zm0-120v-60h200v60H280Zm440 40h-60v-102q-76-11-128-70t-52-138h60q0 62 44 106t106 44q63 0 106.5-44T840-640h60q0 79-51.5 138T720-432v102Z",
    fill: "currentColor"
  }));
};
export default SvgSpeechToText;