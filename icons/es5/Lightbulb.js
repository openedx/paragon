function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLightbulb = function SvgLightbulb(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.45 5.41 19.04 4l-1.79 1.8 1.41 1.41 1.79-1.8ZM13 1.5h-2v2.95h2V1.5Zm7 11.95h3v-2h-3v2ZM9 17.64v4.81h6v-4.81c1.79-1.04 3-2.97 3-5.19 0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19Zm-5-4.19v-2H1v2h3Zm2.76-7.66-1.79-1.8L3.56 5.4l1.8 1.79 1.4-1.4Z",
    fill: "currentColor"
  }));
};
export default SvgLightbulb;