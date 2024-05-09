function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgClarify = function SvgClarify(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M260-300h260v-60H260v60Zm380 0h60v-360h-60v360ZM260-450h260v-60H260v60Zm0-150h260v-60H260v60ZM72-120v-720h816v720H72Zm60-60h696v-600H132v600Zm0 0v-600 600Z",
    fill: "currentColor"
  }));
};
export default SvgClarify;