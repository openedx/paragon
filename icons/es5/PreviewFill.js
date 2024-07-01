function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPreviewFill = function SvgPreviewFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-720h720v720H120Zm60-60h600v-520H180v520Zm300.04-105Q400-285 337-328.15q-63-43.15-92-112Q274-509 336.96-552q62.96-43 143-43Q560-595 623-551.85q63 43.15 92 112Q686-371 623.04-328q-62.96 43-143 43Zm-.16-105q-20.88 0-35.38-14.62-14.5-14.62-14.5-35.5 0-20.88 14.62-35.38 14.62-14.5 35.5-14.5 20.88 0 35.38 14.62 14.5 14.62 14.5 35.5 0 20.88-14.62 35.38-14.62 14.5-35.5 14.5Zm.12 30q33.6 0 56.8-23.2Q560-406.4 560-440q0-33.6-23.2-56.8Q513.6-520 480-520q-33.6 0-56.8 23.2Q400-473.6 400-440q0 33.6 23.2 56.8Q446.4-360 480-360Z",
    fill: "currentColor"
  }));
};
export default SvgPreviewFill;