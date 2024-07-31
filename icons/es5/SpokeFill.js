function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSpokeFill = function SvgSpokeFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-540q-62 0-106-44t-44-106q0-63 44-106.5T480-840q63 0 106.5 43.5T630-690q0 62-43.5 106T480-540ZM270-120q-62 0-106-44t-44-106q0-63 44-106.5T270-420q63 0 106.5 43.5T420-270q0 62-43.5 106T270-120Zm420 0q-62 0-106-44t-44-106q0-63 44-106.5T690-420q63 0 106.5 43.5T840-270q0 62-43.5 106T690-120Z",
    fill: "currentColor"
  }));
};
export default SvgSpokeFill;