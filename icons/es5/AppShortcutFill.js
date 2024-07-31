function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAppShortcutFill = function SvgAppShortcutFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M726-451H460v151h-60v-211h326l-82-81 42-42 153 153-153 153-42-42 82-81ZM200-40v-880h560v206h-60v-56H260v580h440v-56h60v206H200Z",
    fill: "currentColor"
  }));
};
export default SvgAppShortcutFill;