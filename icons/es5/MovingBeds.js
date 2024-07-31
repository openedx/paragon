function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMovingBeds = function SvgMovingBeds(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-80v-800h520v800H80Zm60-445q20-17 45.5-26t54.5-9h200q29 0 54.5 9t45.5 26v-295H140v295Zm199.91-85q-28.91 0-49.41-20.59-20.5-20.59-20.5-49.5t20.59-49.41q20.59-20.5 49.5-20.5t49.41 20.59q20.5 20.59 20.5 49.5t-20.59 49.41q-20.59 20.5-49.5 20.5ZM780-340l-42-42 67-68H640v-60h165l-67-68 42-42 140 140-140 140ZM140-140h400v-260q0-42-29-71t-71-29H240q-42 0-71 29t-29 71v260Zm170-70h60v-80h80v-60h-80v-80h-60v80h-80v60h80v80Zm-170 70h400-400Z",
    fill: "currentColor"
  }));
};
export default SvgMovingBeds;