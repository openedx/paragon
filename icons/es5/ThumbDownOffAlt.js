function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgThumbDownOffAlt = function SvgThumbDownOffAlt(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19 3h4v12h-4zM1 11.6V16h8.31l-1.12 5.38L9.83 23 17 15.82V3H4.69L1 11.6zM15 5v9.99l-4.34 4.35.61-2.93.5-2.41H3v-1.99L6.01 5H15z",
    fill: "currentColor"
  }));
};
export default SvgThumbDownOffAlt;