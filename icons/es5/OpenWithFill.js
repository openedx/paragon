function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgOpenWithFill = function SvgOpenWithFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-80 317-243l44-44 89 89v-189h60v189l89-89 44 44L480-80ZM238-322 80-480l159-159 44 44-85 85h189v60H198l84 84-44 44Zm484 0-44-44 84-84H574v-60h188l-84-84 44-44 158 158-158 158ZM450-574v-188l-84 84-44-44 158-158 158 158-44 44-84-84v188h-60Z",
    fill: "currentColor"
  }));
};
export default SvgOpenWithFill;