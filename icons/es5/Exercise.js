function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgExercise = function SvgExercise(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m826-585-42-42 45-45-157-157-45 45-43-43 86-88 244 244-88 86ZM48-290l86-86 43 42-45 45 157 157 45-45 42 43-86 86L48-290Zm695-122 85-85-331-331-85 85 331 331ZM463-132l86-86-331-331-86 86 331 331Zm9-248 109-109-92-92-109 109 92 92Zm162 163L463-48 48-463l169-171 120 120 110-110-119-119 169-171 417 417-171 169-119-119-110 110 120 120Z",
    fill: "currentColor"
  }));
};
export default SvgExercise;