function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgScaleFill = function SvgScaleFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-80q0-107 31-185t79-129.5q48-51.5 106.5-80T410-511v-139q-137-17-233.5-79.5T80-880h800q0 88-96.5 150.5T550-650v139q55 8 113.5 36.5t106.5 80Q818-343 849-265t31 185H640v-60h177q-18-152-111-234.5T480-457q-133 0-226 82.5T143-140h177v60H80Zm400 0q-33 0-56.5-23.5T400-160q0-17 6.5-31t17.5-25q24-24 82.5-50T640-320q-29 75-54.5 133.5T536-104q-11 11-25 17.5T480-80Z",
    fill: "currentColor"
  }));
};
export default SvgScaleFill;