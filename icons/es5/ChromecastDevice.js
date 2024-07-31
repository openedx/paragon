function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgChromecastDevice = function SvgChromecastDevice(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M810-390v-180h110v180H810Zm-40 70H440.48q-16.48 0-32.98 4.5Q391-311 366-300q-39 17-67 23.5t-59 6.5q-78 0-139-46T40-420v-120q0-59 61-104.5T240-690q31 0 59 6.5t67 23.5q25 11 41.5 15.5T440-640h330v320Zm-530-10q24.06 0 47.03-5.5Q310-341 342-355q33-14 54.97-19.5T440-380h270v-200H440q-21.06 0-43.03-5.5Q375-591 342-605q-32-14-54.97-19.5T240-630q-54 0-97 27.64-43 27.65-43 62.36v45h15q6 0 10.5 4.5T130-480q0 6-4.5 10.5T115-465h-15v45q0 34.71 43 62.36Q186-330 240-330ZM100-480Z",
    fill: "currentColor"
  }));
};
export default SvgChromecastDevice;