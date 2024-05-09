function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBatteryChange = function SvgBatteryChange(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M280-80v-736h120v-64h160v64h120v736H280Zm60-60h280v-616H340v616Zm0 0h280-280Zm130-136 43-42-31-31q-6-6-9-13.5t-3-15.5q0-8 3-16t9-14l38-38q14-14 22-32.5t8-38.5q0-20-8-39.5T520-590l-31-31-42 43 30 30q6 6 9.5 14t3.5 16q0 8-3.5 15.5T477-489l-37 38q-14 14-22 33t-8 39q0 20 8 39.5t22 33.5l30 30Z",
    fill: "currentColor"
  }));
};
export default SvgBatteryChange;