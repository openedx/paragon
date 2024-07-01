function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAttributionFill = function SvgAttributionFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M436-207h89v-180h58v-230H377v230h59v180Zm44 127q-84 0-157-31t-127-85q-54-54-85-127T80-480q0-83.73 31-156.86Q142-710 196-764t127-85q73-31 157-31 83.73 0 156.86 31Q710-818 764-764t85 127.14q31 73.13 31 156.86 0 84-31 157t-85 127q-54 54-127.14 85Q563.73-80 480-80Zm0-566q23.4 0 38.7-15.3Q534-676.6 534-700q0-23.4-15.3-38.7Q503.4-754 480-754q-23.4 0-38.7 15.3Q426-723.4 426-700q0 23.4 15.3 38.7Q456.6-646 480-646Z",
    fill: "currentColor"
  }));
};
export default SvgAttributionFill;