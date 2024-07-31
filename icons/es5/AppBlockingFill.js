function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAppBlockingFill = function SvgAppBlockingFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M720-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-50q15.77 0 30.89-4Q766-378 778-387L627-538q-8 13-12.5 27.46Q610-496.09 610-481q0 46 31.9 78.5T720-370Zm94-52q8-13 12-27.79 4-14.78 4-30.21 0-46.2-31.9-78.1Q766.2-590 720-590q-15.77 0-30.89 4Q674-582 662-574l152 152ZM200-40v-880h560v206h-60v-56H260v580h440v-56h60v206H200Z",
    fill: "currentColor"
  }));
};
export default SvgAppBlockingFill;