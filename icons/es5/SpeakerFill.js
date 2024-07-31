function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSpeakerFill = function SvgSpeakerFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M760-80H200v-800h560v800ZM481-604q32 0 54-22t22-54q0-32-22-54t-54-22q-32 0-54 22t-22 54q0 32 22 54t54 22Zm-1 408q69 0 116.5-47.5T644-360q0-69-47.5-116.5T480-524q-69 0-116.5 47.5T316-360q0 69 47.5 116.5T480-196Zm-.07-60q-42.93 0-73.43-30.57-30.5-30.57-30.5-73.5t30.57-73.43q30.57-30.5 73.5-30.5t73.43 30.57q30.5 30.57 30.5 73.5t-30.57 73.43q-30.57 30.5-73.5 30.5Z",
    fill: "currentColor"
  }));
};
export default SvgSpeakerFill;