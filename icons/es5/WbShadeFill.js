function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWbShadeFill = function SvgWbShadeFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M792-160 540-412v-87l339 339h-87Zm-252 0v-177l177 177H540Zm-400 0v-410H80l230-230 230 230h-60v410H140Zm130-255h80v-155h-80v155Z",
    fill: "currentColor"
  }));
};
export default SvgWbShadeFill;