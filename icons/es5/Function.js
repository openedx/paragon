function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFunction = function SvgFunction(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M402-240v-60h59l121-139-121-141h-74l-71 366q-8 45-34 69.5T215-120q-41 0-68.5-24T119-204q0-27 15-43.5t39-16.5q21 0 34.5 12t13.5 32q0 11-4.5 20.5T204-184q4 2 8.5 3t9.5 1q13 0 22-12.5t13-32.5l69-355H200v-60h137l21-106q9-45 36-69.5t67-24.5q41 0 67.5 24t26.5 60q0 27-15 43.5T501-696q-20 0-34-11.5T453-738q0-10 4-19.5t10-15.5q-2-2-6-3.5t-8-1.5q-13 0-22.5 12T417-735l-18 95h189v60h-47l83 96 78-96h-48v-60h186v60h-58L662-439l120 139h58v60H654v-60h48l-80-93-82 93h48v60H402Z",
    fill: "currentColor"
  }));
};
export default SvgFunction;