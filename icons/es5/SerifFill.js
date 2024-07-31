function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSerifFill = function SvgSerifFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M248-240h114v-13h-61l51-147h153l51 147h-58v13h214v-13h-31L509-720h-65L280-253h-32v13Zm109-175 71-205 72 205H357ZM80-80v-800h800v800H80Z",
    fill: "currentColor"
  }));
};
export default SvgSerifFill;