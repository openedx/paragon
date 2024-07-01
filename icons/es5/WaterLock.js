function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWaterLock = function SvgWaterLock(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M220-140v-434 434-18.75V-140Zm130-494h260v-96q0-54.17-37.88-92.08-37.88-37.92-92-37.92T388-822.08q-38 37.91-38 92.08v96ZM160-80v-554h130v-96q0-78.85 55.61-134.42Q401.21-920 480.11-920q78.89 0 134.39 55.58Q670-808.85 670-730v96h130v257q-8-2-15.8-2.5-7.81-.5-16.4-.5-7.8 0-14.3.5-6.5.5-13.5 1.5v-196H220v434h367q5 17 12 31.5T616-80H160Zm610 0q-37 0-63.5-26.5T680-169.58q0-17.42 6-32.92t17-27.5l67-75 67 75q11 12 17 27.5t6 32.92q0 36.58-26.1 63.08T770-80ZM480.17-280q31.83 0 54.33-22.03T557-355q0-30-22.67-54.5t-54.5-24.5q-31.83 0-54.33 24.5t-22.5 55q0 30.5 22.67 52.5t54.5 22Z",
    fill: "currentColor"
  }));
};
export default SvgWaterLock;