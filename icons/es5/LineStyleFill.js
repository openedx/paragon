function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLineStyleFill = function SvgLineStyleFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-160v-60h60v60h-60Zm0-120v-60h209v60H120Zm0-120v-60h330v60H120Zm0-120v-280h720v280H120Zm165 360v-60h60v60h-60Zm90-120v-60h210v60H375Zm75 120v-60h60v60h-60Zm60-240v-60h330v60H510Zm105 240v-60h60v60h-60Zm16-120v-60h209v60H631Zm149 120v-60h60v60h-60Z",
    fill: "currentColor"
  }));
};
export default SvgLineStyleFill;