function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgLockClock(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18 11c.7 0 1.37.1 2 .29V8h-3V6.21c0-2.61-1.91-4.94-4.51-5.19A5.008 5.008 0 007 6v2H4v14h8.26A6.995 6.995 0 0118 11zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85-.7.71z",
    fill: "currentColor"
  }));
}
export default SvgLockClock;