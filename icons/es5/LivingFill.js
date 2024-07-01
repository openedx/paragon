function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLivingFill = function SvgLivingFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-80v-800h800v800H80Zm117-161h566v-311h-54v-159H251v159h-54v311Zm50-50v-222h84v131h298v-131h84v222H247Zm134-141v-125h-80v-104h358v104h-80v125H381Z",
    fill: "currentColor"
  }));
};
export default SvgLivingFill;