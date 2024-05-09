function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCompareArrowsFill = function SvgCompareArrowsFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m317-160-42-42 121-121H80v-60h316L275-504l42-42 193 193-193 193Zm326-254L450-607l193-193 42 42-121 121h316v60H564l121 121-42 42Z",
    fill: "currentColor"
  }));
};
export default SvgCompareArrowsFill;