function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgEcgHeart = function SvgEcgHeart(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M148-415q-35-35-51.5-80T80-589q0-103 67-177t167-74q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880-590q0 49-17 94t-51 80L479-82 148-415Zm166-365q-74.57 0-124.29 56.44Q140-667.12 140-590q0 20.72 4 40.86T156-510h219l56 83 69-218h26l91 135h187.21q7.9-19.43 11.84-39.43 3.95-20 3.95-40.57 0-77-49.95-133.5Q720.11-780 645.19-780q-35.19 0-67.69 14.5T521-725l-30.76 33H469l-31-33q-24.27-25.82-56.64-40.41Q349-780 314-780Zm166 612 281-282H584.87L529-533l-70 217h-25l-91-134H198l282 282Zm0-306Z",
    fill: "currentColor"
  }));
};
export default SvgEcgHeart;