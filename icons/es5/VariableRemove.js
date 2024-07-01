function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgVariableRemove = function SvgVariableRemove(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M611-280H120v-400h720v171h-60v-111H180v280h431v60Zm-431-60v-280 280Zm491 103 85-85-85-85 42-42 85 85 85-85 42 42-85 85 85 85-42 42-85-85-85 85-42-42Z",
    fill: "currentColor"
  }));
};
export default SvgVariableRemove;