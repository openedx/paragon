function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLeftPanelClose = function SvgLeftPanelClose(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M663-344v-272L527-480l136 136ZM180-180h147v-600H180v600Zm207 0h393v-600H387v600Zm-60 0H180h147Zm-207 60v-720h720v720H120Z",
    fill: "currentColor"
  }));
};
export default SvgLeftPanelClose;