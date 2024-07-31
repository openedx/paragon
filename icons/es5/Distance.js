function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDistance = function SvgDistance(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-80q-106 0-173-31t-67-79q0-27 24.5-51t67.5-39l18 58q-16 5-29.5 14T299-190q17 20 70.5 35T480-140q57 0 111-15t71-35q-8-8-21-17t-30-15l17-58q43 15 67.5 39t24.5 51q0 48-67 79T480-80Zm0-215q21.1-39 44.55-71.5Q548-399 571-428q44-57 69.5-98T666-634.07q0-77.67-54.21-131.8-54.22-54.13-132-54.13Q402-820 348-765.87q-54 54.13-54 131.8Q294-567 319.5-526t69.5 98q23 29 46.45 61.5Q458.9-334 480-295Zm0 109q-12 0-21-6.77T446-211q-24-73-60.02-121T316-424q-34-44-58-91.5t-24-118.54Q234-737 305.32-808.5 376.64-880 480-880q103.36 0 174.68 71.32Q726-737.36 726-634q0 71-23.87 118.34Q678.25-468.32 644-424q-34 44-70 92t-59.85 120.73Q510-200 501-193t-21 7Zm.21-388q24.79 0 42.29-17.71t17.5-42.5q0-24.79-17.71-42.29t-42.5-17.5q-24.79 0-42.29 17.71t-17.5 42.5q0 24.79 17.71 42.29t42.5 17.5Zm-.21-60Z",
    fill: "currentColor"
  }));
};
export default SvgDistance;