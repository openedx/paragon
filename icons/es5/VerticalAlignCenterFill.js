function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgVerticalAlignCenterFill = function SvgVerticalAlignCenterFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M450-80v-202l-86 86-44-44 160-160 160 160-44 44-86-86v202h-60ZM160-450v-60h640v60H160Zm320-110L320-720l44-44 86 86v-202h60v202l86-86 44 44-160 160Z",
    fill: "currentColor"
  }));
};
export default SvgVerticalAlignCenterFill;