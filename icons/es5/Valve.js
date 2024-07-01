function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgValve = function SvgValve(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M450-620v-160H290v-60h380v60H510v160h-60ZM160-120v-310h60v40h150v-140h-40v-60h300v60h-40v140h150v-40h60v310h-60v-40H220v40h-60Zm60-100h520v-110H530v-200H430v200H220v110Zm260 0Z",
    fill: "currentColor"
  }));
};
export default SvgValve;