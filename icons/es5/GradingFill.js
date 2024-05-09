function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgGradingFill = function SvgGradingFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M660-120 555-226l43-42 63 63 138-139 43 42-182 182Zm-540 0v-60h360v60H120Zm0-165v-60h360v60H120Zm0-165v-60h720v60H120Zm0-165v-60h720v60H120Zm0-165v-60h720v60H120Z",
    fill: "currentColor"
  }));
};
export default SvgGradingFill;