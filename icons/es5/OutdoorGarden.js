function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgOutdoorGarden = function SvgOutdoorGarden(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-120v-600l160-120 120 90 120-90 120 90 120-90 160 120v600H80Zm60-60h187v-517l-87-68-100 75v510Zm247 0h186v-517l-93-68-93 68v517Zm246 0h187v-510l-100-75-87 68v517Z",
    fill: "currentColor"
  }));
};
export default SvgOutdoorGarden;