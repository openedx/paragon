function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMovedLocation = function SvgMovedLocation(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m734-454-42-42 93-93q-101-17-188.5 13T435-474q45-103 141.5-159.5T786-690l-94-94 42-42 186 186-186 186ZM480-80Q325-214 242.5-330T160-552q0-136 93-232t227-96q46 0 90.5 12t82.5 38l-43 43q-29-17-62.5-25t-67.5-8q-109 0-184.5 78.5T220-552q0 83 66 179.5T480-159q60-55 111-119.5T689-414l43 43q-56 83-116.5 155T480-80Z",
    fill: "currentColor"
  }));
};
export default SvgMovedLocation;