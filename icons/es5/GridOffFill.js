function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgGridOffFill = function SvgGridOffFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m833-41-79-79H640v-114l-60-60v174H380v-200h174l-60-60H380v-114l-60-60v174H120v-200h174l-60-60H120v-114l-94-94 43-43L876-84l-43 43Zm-713-79v-200h200v200H120Zm720-86L726-320h114v114ZM666-380l-26-26v-174h200v200H666Zm-86-86L466-580h114v114ZM406-640l-26-26v-174h200v200H406Zm234 0v-200h200v200H640Zm-320-86L206-840h114v114Z",
    fill: "currentColor"
  }));
};
export default SvgGridOffFill;