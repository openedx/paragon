function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPrintLock = function SvgPrintLock(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M650-120v-190h40v-45q0-30.94 22.04-52.97 22.05-22.03 53-22.03Q796-430 818-407.97T840-355v45h40v190H650Zm70-190h90v-44.91Q810-374 797.09-387q-12.91-13-32-13T733-387.06q-13 12.93-13 32.06v45ZM140-588h680-680Zm102 468v-176H80v-352h800v193q-14-9-28.5-15.5T820-482v-106H140v232h102v-76h376q-14.1 12.82-25.55 27.91Q581-389 572-372H302v192h267q8 17 18.5 32t24.5 28H242Zm416-528v-132H302v132h-60v-192h476v192h-60Z",
    fill: "currentColor"
  }));
};
export default SvgPrintLock;