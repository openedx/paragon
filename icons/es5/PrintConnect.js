function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPrintConnect = function SvgPrintConnect(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M140-588h680-680Zm102 468v-176H80v-352h800v193q-14-9-28.5-15.5T820-482v-106H140v232h102v-76h376q-14.1 12.82-25.55 27.91Q581-389 572-372H302v192h267q8 17 18.5 32t24.5 28H242Zm476-47-100-99 43-42 57 56 141-141 43 42-184 184Zm-60-481v-132H302v132h-60v-192h476v192h-60Z",
    fill: "currentColor"
  }));
};
export default SvgPrintConnect;