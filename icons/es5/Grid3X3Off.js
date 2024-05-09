function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgGrid3X3Off = function SvgGrid3X3Off(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m712-333-60-60h148v60h-88Zm-85-85L418-627h149v-173h60v173h173v60H627v149ZM393-653l-60-60v-87h60v147ZM821-54 627-247v87h-60v-147l-26-26H393v173h-60v-173H160v-60h173v-148l-26-26H160v-60h86L70-803l43-43L863-96l-42 42Z",
    fill: "currentColor"
  }));
};
export default SvgGrid3X3Off;