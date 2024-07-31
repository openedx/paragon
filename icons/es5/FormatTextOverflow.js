function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFormatTextOverflow = function SvgFormatTextOverflow(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-160v-640h60v640h-60Zm512-193-42-42 55-55H320v-60h365l-55-55 42-42 128 127-128 127ZM500-160v-190h60v190h-60Zm0-450v-190h60v190h-60Z",
    fill: "currentColor"
  }));
};
export default SvgFormatTextOverflow;