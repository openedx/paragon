function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPrintError = function SvgPrintError(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M242-120v-176H80v-352h790v60H140v232h102v-76h428v60H302v192h368v60H242Zm0-528v-192h476v192h-60v-132H302v132h-60Zm517.82 528q-12.82 0-21.32-9t-8.5-21.5q0-12.5 9-21t21.5-8.5q12.5 0 21 8.62 8.5 8.63 8.5 21.38 0 12-8.68 21-8.67 9-21.5 9ZM730-250v-278h60v278h-60ZM140-588h730-730Z",
    fill: "currentColor"
  }));
};
export default SvgPrintError;