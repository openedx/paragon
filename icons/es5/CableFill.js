function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCableFill = function SvgCableFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-200v-180h80v-310q0-64 47-107t113-43q63 0 106.5 43.5T510-690v420q0 38 26 64t64 26q41 0 70.5-25.5T700-270v-310h-80v-180h40v-80h140v80h40v180h-80v310q0 64-47 107t-113 43q-63 0-106.5-43.5T450-270v-420q0-38-26-64t-64-26q-41 0-70.5 25.5T260-690v310h80v180h-40v80H160v-80h-40Z",
    fill: "currentColor"
  }));
};
export default SvgCableFill;