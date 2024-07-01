function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMistFill = function SvgMistFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M130-210v-60h460v60H130Zm560 0v-60h140v60H690ZM130-370v-60h140v60H130Zm240 0v-60h460v60H370ZM130-530v-60h500v60H130Zm600 0v-60h100v60H730ZM130-690v-60h260v60H130Zm360 0v-60h340v60H490Z",
    fill: "currentColor"
  }));
};
export default SvgMistFill;