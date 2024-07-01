function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTransformFill = function SvgTransformFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M640-40 488-192l42-42 80 80v-139H350q-26 0-43-17t-17-43v-254H80v-60h210v-139l-80 80-42-42 152-152 152 152-42 42-80-80v453h530v60H670v139l80-80 42 42L640-40Zm-30-373v-194H410v-60h200q26 0 43 17t17 43v194h-60Z",
    fill: "currentColor"
  }));
};
export default SvgTransformFill;