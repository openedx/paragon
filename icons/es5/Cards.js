function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCards = function SvgCards(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M220-500v-241h241v241H220Zm0 281v-241h241v241H220Zm280-281v-241h241v241H500Zm0 281v-241h241v241H500ZM280-560h121v-121H280v121Zm280 0h121v-121H560v121ZM280-279h121v-121H280v121Zm280 0h121v-121H560v121ZM401-560Zm159 0Zm0 160Zm-159 0ZM120-120v-720h720v720H120Zm60-60h600v-600H180v600Z",
    fill: "currentColor"
  }));
};
export default SvgCards;