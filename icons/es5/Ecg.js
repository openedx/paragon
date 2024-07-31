function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgEcg = function SvgEcg(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-480ZM80-570v-230h800v320h-60v-260H140v170H80Zm0 410v-230h60v170h299v60H80ZM720-60l-81-69q-72-62-95.5-93.5T520-290q0-45 32-77.5t78-32.5q26 0 49.5 12t40.5 35q16-23 39.5-35t50.5-12q45 0 77.5 32.5T920-290q0 36-24.5 68.5T793-123l-73 63Zm0-79 32-28q66-56 87-79.5t21-43.5q0-20-15-35t-35-15q-12.19 0-22.1 5-9.9 5-20.9 16l-47 44-48-44q-11-11-21.08-16-10.07-5-20.92-5-21 0-35.5 15T580-290q0 20 27.5 51t78.5 72l34 28ZM80-450v-60h137l63 123 160-320 98 197h132v60H501l-62-122-160 320-98-198H80Zm640 210Z",
    fill: "currentColor"
  }));
};
export default SvgEcg;