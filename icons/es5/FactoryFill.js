function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFactoryFill = function SvgFactoryFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-80v-481l280-119v80l200-81v121h320v480H80Zm370-160h60v-160h-60v160Zm-160 0h60v-160h-60v160Zm320 0h60v-160h-60v160Zm265-360H705l35-280h100l35 280Z",
    fill: "currentColor"
  }));
};
export default SvgFactoryFill;