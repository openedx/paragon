function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCircles = function SvgCircles(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M690-390q28-1 55-6t53-13q-15 140-117.5 234.5T438-80q-74 0-139.5-28t-114-76.5Q136-233 108-298.5T80-438q0-142 95-245.5T412-798q-12 26-16.5 54t-5.5 57q-89 21-147 89.5T185-438q0 106 73.5 179.5T438-185q91 0 161.5-57.5T690-390Zm-5-530q97.5 0 165.75 68.35 68.25 68.36 68.25 166 0 97.65-68.35 166.15-68.36 68.5-166 68.5-97.65 0-166.15-68.54T450-686q0-97.5 68.54-165.75T685-920Zm-.5 364q51.5 0 90.5-39t39-90.5q0-51.5-39-90.5t-90.5-39q-51.5 0-90.5 39t-39 90.5q0 51.5 39 90.5t90.5 39Zm.5-130ZM439-437Z",
    fill: "currentColor"
  }));
};
export default SvgCircles;