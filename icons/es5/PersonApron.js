function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPersonApron = function SvgPersonApron(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-481q-63 0-106.5-43.5T330-631q0-63 43.5-106.5T480-781q63 0 106.5 43.5T630-631q0 63-43.5 106.5T480-481ZM160-160v-94q0-35 18-63.5t50-42.5q60-27 123.18-43.5Q414.37-420 480-420q66 0 128.5 17T731-360q32 14 50.5 42.5T800-254v94H160Zm320-381q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26Zm160 208v113h100v-34q0-16.69-9-30.34Q722-298 707-306q-17-8-33.5-14.5T640-333Zm-260-17.44V-290h200v-60q-25-5-49.5-7.5T480-360q-26 0-50.5 2.5t-49.5 7.06ZM220-220h100v-114q-17 6-34 13t-34 15q-15 8-23.5 21.66Q220-270.69 220-254v34Zm420 0H320h320ZM480-631Z",
    fill: "currentColor"
  }));
};
export default SvgPersonApron;