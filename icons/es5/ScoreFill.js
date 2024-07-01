function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgScoreFill = function SvgScoreFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-720h720v720H120Zm366-366h50v-240h-50v240Zm104 0h59l-53-127 53-113h-59l-54 120 54 120Zm-317 0h153v-50H323v-49h103v-141H273v50h103v41H273v149Zm507 35v-85L520-276 353-443 180-270v85l173-173 167 167 260-260Z",
    fill: "currentColor"
  }));
};
export default SvgScoreFill;