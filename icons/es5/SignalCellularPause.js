function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSignalCellularPause = function SvgSignalCellularPause(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m80-80 800-800v490h-60v-345L224-140h346v60H80Zm570 0v-230h60v230h-60Zm140 0v-230h60v230h-60ZM522-438Z",
    fill: "currentColor"
  }));
};
export default SvgSignalCellularPause;