function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTourFill = function SvgTourFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M200-80v-800h60v84h580l-81 193 81 193H260v330h-60Zm301.21-451Q531-531 552-552.21t21-51Q573-633 551.79-654t-51-21Q471-675 450-653.79t-21 51Q429-573 450.21-552t51 21Z",
    fill: "currentColor"
  }));
};
export default SvgTourFill;