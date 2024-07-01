function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMuseumFill = function SvgMuseumFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-80v-60h83v-411H80v-47l400-282 400 282v47h-82v411h82v60H80Zm244-161h60v-184l96 145 97-145v184h60v-274h-65l-92 140-92-140h-64v274Z",
    fill: "currentColor"
  }));
};
export default SvgMuseumFill;