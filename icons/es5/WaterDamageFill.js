function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWaterDamageFill = function SvgWaterDamageFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M201-160v-392L76-456l-36-48 440-337 440 337-36 48-125-96v392H201Zm279-170q29 0 49.5-20.5T550-400q0-26-10-46t-60-92q-50 72-60 92t-10 46q0 29 20.5 49.5T480-330Z",
    fill: "currentColor"
  }));
};
export default SvgWaterDamageFill;