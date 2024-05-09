function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgScreenRotationFill = function SvgScreenRotationFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M562-145 145-562l258-257 417 417-258 257ZM478 1q-99 0-186-37.5t-152-103Q75-205 37.5-292T0-478h60q0 80 28.5 151.5t78.5 127Q217-144 285.5-109T433-66L303-196l43-43L574-11q-23 7-47.5 9.5T478 1Zm422-479q0-80-28-151.5T794.5-757Q745-813 677-848.5T530-892l128 128-43 43-228-228q23-6 45.5-8.5T478-960q100 0 187.5 38t153 103.5Q884-753 922-665.5T960-478h-60Z",
    fill: "currentColor"
  }));
};
export default SvgScreenRotationFill;