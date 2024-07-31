function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgExerciseFill = function SvgExerciseFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M826-585 584-827l86-88 244 244-88 86ZM290-48 48-290l86-86 242 242-86 86Zm173-42L90-463l135-135 98 98 138-138-98-98 134-136 375 375-136 134-98-98-138 138 98 98L463-90Z",
    fill: "currentColor"
  }));
};
export default SvgExerciseFill;