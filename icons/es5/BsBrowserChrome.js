function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgBsBrowserChrome(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    className: "bs-browser-chrome_svg__bi bs-browser-chrome_svg__bi-browser-chrome",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 8a8.001 8.001 0 01-7.022 7.94l1.902-7.098a2.995 2.995 0 00.05-1.492A2.977 2.977 0 0010.237 6h5.511A8 8 0 0116 8zM0 8a8 8 0 007.927 8l1.426-5.321a2.978 2.978 0 01-.723.255 2.979 2.979 0 01-1.743-.147 2.986 2.986 0 01-1.043-.7L.633 4.876A7.975 7.975 0 000 8zm5.004-.167L1.108 3.936A8.003 8.003 0 0115.418 5H8.066a2.979 2.979 0 00-1.252.243 2.987 2.987 0 00-1.81 2.59zM8 10a2 2 0 100-4 2 2 0 000 4z",
    fill: "currentColor"
  }));
}
export default SvgBsBrowserChrome;