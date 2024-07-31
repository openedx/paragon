function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBatteryShare = function SvgBatteryShare(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M400-290v-180h281l-73-74 42-42 146 146-146 146-43-43 74-73H460v120h-60ZM280-80v-736h120v-64h160v64h120v170h-60v-110H340v616h280v-94h60v154H280Z",
    fill: "currentColor"
  }));
};
export default SvgBatteryShare;