function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgButtonsAlt = function SvgButtonsAlt(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-240v-480h800v480H80Zm60-60h680v-360H140v360Zm147-60h49v-95h95v-50h-95v-95h-49v95h-95v50h95v95Zm-147 60v-360 360Z",
    fill: "currentColor"
  }));
};
export default SvgButtonsAlt;