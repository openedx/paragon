function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHandshake = function SvgHandshake(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m10.59 5.95-7.05 7.04L.7 10.3l8.55-8.55L17.2 9.7l-1.42 1.42-5.19-5.17zm12.65 4.29-8.49-8.49-2.06 2.06 5.9 5.88-2.83 2.83-5.17-5.17-6.27 6.27 1.42 1.41 5.32-5.32.71.71-5.32 5.32 1.42 1.41 5.32-5.32.71.71-5.32 5.32 1.41 1.41 5.32-5.32.71.71L10.68 20l1.41 1.41 11.15-11.17z",
    fill: "currentColor"
  }));
};
export default SvgHandshake;