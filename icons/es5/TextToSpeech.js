function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgTextToSpeech(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 22c-.417 0-.77-.146-1.063-.438A1.447 1.447 0 012 20.5v-17c0-.417.146-.77.438-1.063A1.447 1.447 0 013.5 2H13l-1.5 1.5h-8v17h12V17H17v3.5c0 .417-.146.77-.438 1.063A1.446 1.446 0 0115.5 22h-12zM6 17.75v-1.5h7v1.5H6zm0-3v-1.5h5v1.5H6zm9.5.25l-4-4H8V6h3.5l4-4v13zm1.5-2.3V4.05c.933.35 1.667.967 2.2 1.85.533.883.8 1.75.8 2.6 0 .85-.292 1.692-.875 2.525S17.833 12.417 17 12.7zm0 3.55V14.7c1.167-.417 2.208-1.167 3.125-2.25.917-1.083 1.375-2.4 1.375-3.95 0-1.55-.458-2.867-1.375-3.95C19.208 3.467 18.167 2.717 17 2.3V.75c1.7.45 3.125 1.388 4.275 2.813C22.425 4.986 23 6.633 23 8.5c0 1.867-.575 3.512-1.725 4.938C20.125 14.863 18.7 15.8 17 16.25z",
    fill: "currentColor"
  }));
}
export default SvgTextToSpeech;