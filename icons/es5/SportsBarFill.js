function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSportsBarFill = function SvgSportsBarFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M250-120v-352q-52-14-91-53t-39-95q0-53 30.5-94.5T229-772q23-48 68.5-78T400-880q35 0 65.5 12t55.5 33q10-2 19-3.5t20-1.5q66 0 113 47t47 113q0 22-9 44t-23 36h152v400H670v80H250Zm-70-500q0 38 31 64t69 26q32 0 58-17.5t53-50.5q23-28 55-50t74-22h140q0-45-26.5-77.5T560-780q-18 0-35.5 5.5L507-769l-19-16q-18-16-41-25.5t-47-9.5q-35 0-67 18t-47 50l-14 30-32 11q-26 9-43 36t-17 55Zm490 360h110v-280H670v280Z",
    fill: "currentColor"
  }));
};
export default SvgSportsBarFill;