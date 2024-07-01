function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBarcodeReaderFill = function SvgBarcodeReaderFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M240-120q-60 0-95.5-46.5T124-270l72-272q-33-21-54.5-57T120-680q0-66 47-113t113-47h449L569-520H439l-13 50h44v140h-82l-32 122q-11 39-43 63.5T240-120Zm525-653-17-36 127-58 16 37-126 57Zm110 280-127-57 17-37 126 58-16 36ZM770-660v-40h140v40H770Z",
    fill: "currentColor"
  }));
};
export default SvgBarcodeReaderFill;