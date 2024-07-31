function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFlexWrapFill = function SvgFlexWrapFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M40-80v-360h240v360H40Zm320 0v-360h240v360H360Zm320 0v-360h240v360H680Zm-260-60h120v-240H420v240ZM40-520v-360h240v360H40Zm320 0v-360h240v360H360Zm320 0v-360h240v360H680Zm-580-60h120v-240H100v240Zm640 0h120v-240H740v240Z",
    fill: "currentColor"
  }));
};
export default SvgFlexWrapFill;