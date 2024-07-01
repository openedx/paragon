function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTrackpadInputFill = function SvgTrackpadInputFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-200v-640h760v240h-60v-180H140v520h103l59 60H80ZM740-80H553q-22 0-42-8t-36-24L278-310l52-54 120 34v-350h60v280h67v-160h60v160h66v-110h60v110h67v-30h60v200q0 63-43.5 106.5T740-80Z",
    fill: "currentColor"
  }));
};
export default SvgTrackpadInputFill;