function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPriority = function SvgPriority(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M351-120q-97 0-164-67t-67-164v-258q0-97 67-164t164-67h258q97 0 164 67t67 164v258q0 97-67 164t-164 67H351Zm88-205 240-240-43-43-197 197-97-97-43 43 140 140Zm-88 145h258q71 0 121-50t50-121v-258q0-71-50-121t-121-50H351q-71 0-121 50t-50 121v258q0 71 50 121t121 50Zm129-300Z",
    fill: "currentColor"
  }));
};
export default SvgPriority;