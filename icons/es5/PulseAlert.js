function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPulseAlert = function SvgPulseAlert(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M459-490ZM98-530q-9-23-13.5-46T80-625q0-91 61-153t149-62q57 0 106 26.5t84 77.5q36-51 84.5-77.5T670-840q88 0 149 62t61 153q0 5-.5 9.5t-.5 9.5q-14-13-28.5-23.5T819-648q-8-58-48.5-95T670-780q-51 0-95 31.5T505-661h-50q-26-55-70-87t-95-32q-64 0-107 44.5T140-625q0 25.24 6 48.12T165-530H98Zm382 409-99-91q-47-43-83-77t-63-61h84q30 29 70 65.5t91 84.5q23.28-19.95 43.14-38.48Q543-257 561-274q11 11 22.5 19t24.5 16q-7 7-14 13.5T579-212l-99 91ZM50-410v-60h174l97-144 95 144h76q-1 7.5-1.5 14.62-.5 7.13-.5 15.38t.5 15.37q.5 7.13 1.5 14.63H384l-64-96-64 96H50Zm669.82 120q-12.82 0-21.32-8.68-8.5-8.67-8.5-21.5 0-12.82 8.68-21.32 8.67-8.5 21.5-8.5 12.82 0 21.32 8.68 8.5 8.67 8.5 21.5 0 12.82-8.68 21.32-8.67 8.5-21.5 8.5ZM690-410v-180h60v180h-60Z",
    fill: "currentColor"
  }));
};
export default SvgPulseAlert;