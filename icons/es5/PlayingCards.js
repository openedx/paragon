function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPlayingCards = function SvgPlayingCards(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m604-389 40-145-124-85-40 145 124 85ZM195-160 56-217l139-330v387Zm60 58v-395l147 395H255Zm209-4L231-741l432-156 235 633-434 158Zm36-78 318-116-191-519-318 115 191 520Zm64-318Z",
    fill: "currentColor"
  }));
};
export default SvgPlayingCards;