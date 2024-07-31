function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPreviewOff = function SvgPreviewOff(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-285q-80 0-143-43t-92-112q19-46 54.5-80.5T382-575l39 39q-38 11-69.5 36T300-440q27 49 75 77t105 28q30 0 58.5-8t52.5-23l35 35q-31 22-68 34t-78 12Zm191-86-35-35q7-8 13-16.5t11-17.5q-25-45-67.5-72T498-544l-49-49q85-11 159 31.5T715-440q-8 20-19 37t-25 32ZM815-56l-64-64H120v-631l-54-54 43-43L858-99l-43 43ZM180-180h511L180-692v512Zm660-22-60-60v-421H359L202-840h638v638Z",
    fill: "currentColor"
  }));
};
export default SvgPreviewOff;