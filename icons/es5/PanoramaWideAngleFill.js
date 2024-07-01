function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPanoramaWideAngleFill = function SvgPanoramaWideAngleFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-160q-91 0-181.5-8.5T120-200q-21-69-30.5-138.5T80-480q0-72 9.5-141.5T120-760q79-20 168-30t192-10q103 0 192 10t168 30q21 69 30.5 138.5T880-480q0 72-10 141.5T840-200q-88 23-178.5 31.5T480-160Z",
    fill: "currentColor"
  }));
};
export default SvgPanoramaWideAngleFill;