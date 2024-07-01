function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAppBadgingFill = function SvgAppBadgingFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M720-610q-45 0-77.5-32.5T610-720q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T720-610ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127q54.5-54 128-85.5T482-880q50 0 77.5 7.5T591-851q2 7 .5 14.5T585-822q-17 23-26 48.5t-9 53.5q0 70 50 120t120 50q26 0 52.5-9t49.5-26q6-5 13.5-6.5t15.5.5q14 4 21.5 31.5T880-482q0 83-31.5 156.5t-85.5 128q-54 54.5-127 86T480-80Z",
    fill: "currentColor"
  }));
};
export default SvgAppBadgingFill;