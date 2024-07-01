function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCamping = function SvgCamping(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-80v-183l363-491-67-90 49-35 55 75 56-75 48 35-66 90 362 491v183H80Zm400-623L140-243v103h145l195-273 195 273h145v-103L480-703ZM359-140h242L480-310 359-140Zm121-273 195 273-195-273-195 273 195-273Z",
    fill: "currentColor"
  }));
};
export default SvgCamping;