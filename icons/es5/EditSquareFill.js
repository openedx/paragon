function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgEditSquareFill = function SvgEditSquareFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M360-360v-170l424-424 168 170-422 424H360Zm440-355 68-70-84-84-69 69 85 85ZM120-120v-720h465L300-555v255h252l288-288v468H120Z",
    fill: "currentColor"
  }));
};
export default SvgEditSquareFill;