function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTabRecent = function SvgTabRecent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M727-47q-79 0-136-57t-57-136q0-79 57-136t136-57q79 0 136 57t57 136q0 79-57 136T727-47Zm74-92 27-27-84-76v-124h-42v135.78L801-139ZM520-560h300v84q17 6 31.5 14.5T880-442v-358H80v640h407q-5-14.17-7.5-29.08Q477-204 475-220H140v-520h380v180ZM140-220v-19 19-520 520Z",
    fill: "currentColor"
  }));
};
export default SvgTabRecent;