function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgResponsiveLayout = function SvgResponsiveLayout(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-505h215v-215h505v720H120Zm505-60h155v-600H395v155h230v445Zm-230 0h170v-385H395v385Zm-215 0h155v-385H180v385Zm445-445v60-60Zm-290 60Zm230 0Zm60-60Z",
    fill: "currentColor"
  }));
};
export default SvgResponsiveLayout;