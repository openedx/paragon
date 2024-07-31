function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgScreenshotFrame = function SvgScreenshotFrame(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M200-690v-190h190v60H260v130h-60Zm0 610v-190h60v130h130v60H200Zm500-610v-130H570v-60h190v190h-60ZM570-80v-60h130v-130h60v190H570Z",
    fill: "currentColor"
  }));
};
export default SvgScreenshotFrame;