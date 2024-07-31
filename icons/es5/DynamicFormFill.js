function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDynamicFormFill = function SvgDynamicFormFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-510v-290h460v290H80Zm0 350v-290h540v290H80Zm600 0v-350h-80v-290h280l-80 220h80L680-160ZM195-275h60v-60h-60v60Zm0-350h60v-60h-60v60Z",
    fill: "currentColor"
  }));
};
export default SvgDynamicFormFill;