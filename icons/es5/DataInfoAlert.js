function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDataInfoAlert = function SvgDataInfoAlert(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-160v-60h480v60H120Zm519.89-290Q561-450 505.5-505.61q-55.5-55.6-55.5-134.5 0-78.89 55.61-134.39 55.6-55.5 134.5-55.5 78.89 0 134.39 55.61 55.5 55.6 55.5 134.5 0 78.89-55.61 134.39-55.6 55.5-134.5 55.5ZM120-500v-60h262q5.32 16.32 12.16 31.16T409-500H120Zm0 170v-60h419q13.8 6.36 29.4 10.68Q584-375 600-373v43H120Zm500-190h40v-160h-40v160Zm20-200q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z",
    fill: "currentColor"
  }));
};
export default SvgDataInfoAlert;