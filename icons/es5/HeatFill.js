function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHeatFill = function SvgHeatFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M464-315q0 42 18.5 81t62.5 88l-42 37q-53-55-76.5-103.5T403-313q0-35 10.5-75T453-499q25-57 34.5-90.5T497-651q0-38-20-73t-68-82l40-46q57 54 82.5 101t25.5 99q0 34-10.5 73T509-476q-26 61-35.5 96t-9.5 65Zm203 1q0 42 18.5 80.5T748-146l-42 37q-53-55-76.5-103T606-312q0-35 10.5-75T656-498q25-57 34.5-90.5T700-650q0-38-20-73.5T612-806l40-45q57 54 82.5 101t25.5 99q0 34-10.5 73T712-475q-26 61-35.5 96t-9.5 65Zm-406-2q0 42 18.5 81t62.5 88l-42 36q-53-55-76.5-103T200-314q0-35 10.5-75T250-500q25-57 34.5-90.5T294-652q0-38-20-73.5T206-808l40-45q57 54 82.5 101t25.5 99q0 34-10.5 73T306-477q-26 61-35.5 96t-9.5 65Z",
    fill: "currentColor"
  }));
};
export default SvgHeatFill;