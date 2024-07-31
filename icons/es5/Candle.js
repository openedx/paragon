function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCandle = function SvgCandle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M240-140h480q25.5 0 42.75-17.25T780-200v-20H180v19q0 25.93 17.25 43.46Q214.5-140 240-140Zm239-500q-46 0-77.5-32.5T370-751q0-54 34.5-94t75.5-75q37 38 73.5 77t36.5 92q0 46-32.5 78.5T479-640Zm-60 360h121v-260H419v260Zm61-420q20 0 35-13.88 15-13.87 15-33.91 0-26.21-15.83-45.67Q498.33-812.93 480-831q-18.33 18.07-34.17 37.54Q430-774 430-747.79q0 20.04 15 33.91Q460-700 480-700Zm338 420q17 0 29.5-12.5T860-322q0-17-12.5-29T818-363q-17 0-29.5 12T776-322q0 17 12.5 29.5T818-280ZM720-80H240q-50 0-85-35t-35-86v-79h239v-320h241v320h125q-5-10-7-20.5t-2-21.5q0-42.24 30-71.62Q776-423 818-423t72 29.38q30 29.38 30 71.62 0 37-22.5 64.5T840-222v22q0 50-35 85t-85 35Zm-240-60Zm-61-140h121-121Zm61-486Z",
    fill: "currentColor"
  }));
};
export default SvgCandle;