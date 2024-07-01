function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWifiNotification = function SvgWifiNotification(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM160-200v-60h80v-304q0-84 49.5-150.5T420-798v-82h120v82q32 7 59.5 22t50.5 38q-18.91 4.15-37.45 9.07Q594-724 576-717q-22-14-45.87-20.5Q506.26-744 480-744q-75 0-127.5 52.5T300-564v304h500v60H160Zm345-302Zm5-42-43-42q44-44 102.5-69T694-680q66 0 124 25t102 69l-43 42q-35-35-82.5-55.5T693-620q-54 0-101 20.5T510-544Zm85 85-43-43q27-27 63-42.5t78-15.5q42 0 78.5 15.5T835-502l-43 43q-19-20-44-30.5T694-500q-29 0-54.5 11T595-459Zm99 99-57-56q11-11 25.5-17.5T694-440q17 0 31 6.5t25 17.5l-56 56Z",
    fill: "currentColor"
  }));
};
export default SvgWifiNotification;