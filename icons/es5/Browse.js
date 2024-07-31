function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBrowse = function SvgBrowse(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-245h330v245H120Zm390 0v-415h330v415H510ZM390-305Zm180-170Zm-450 50v-415h330v415H120Zm270-60Zm120-110v-245h330v245H510Zm60-60ZM180-180h210v-125H180v125Zm390 0h210v-295H570v295ZM180-485h210v-295H180v295Zm390-170h210v-125H570v125Z",
    fill: "currentColor"
  }));
};
export default SvgBrowse;