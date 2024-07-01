function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPipFill = function SvgPipFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-520v-60h178L57-780l43-43 200 200v-177h60v280H80Zm60 360q-24 0-42-18t-18-42v-230h60v230h340v60H140Zm680-280v-300H430v-60h390q24 0 42 18t18 42v300h-60ZM540-160v-220h340v220H540Z",
    fill: "currentColor"
  }));
};
export default SvgPipFill;