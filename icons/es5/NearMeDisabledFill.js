function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgNearMeDisabledFill = function SvgNearMeDisabledFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M527-120 413-413 120-527v-43l217-81-219-219 43-43 752 752-43 43-219-219-81 217h-43Zm171-342L462-698l378-142-142 378Z",
    fill: "currentColor"
  }));
};
export default SvgNearMeDisabledFill;