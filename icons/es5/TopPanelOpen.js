function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTopPanelOpen = function SvgTopPanelOpen(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m480-297 136-136H344l136 136ZM180-633h600v-147H180v147Zm0 453h600v-393H180v393Zm0-453v-147 147Zm-60 513v-720h720v720H120Z",
    fill: "currentColor"
  }));
};
export default SvgTopPanelOpen;