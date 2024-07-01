function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCurtainsFill = function SvgCurtainsFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-120v-60h80v-660h640v660h80v60H80Zm162-360q94 29 146.5 117.5T449-180h62q8-94 60-182.5T717-480q-94-29-146-117.5T511-780h-63q-8 94-60 182.5T242-480Z",
    fill: "currentColor"
  }));
};
export default SvgCurtainsFill;