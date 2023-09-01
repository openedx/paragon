function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgLoyalty(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M11.83 2H2v9.83l10.99 11s1.05-1.05 1.41-1.42L22.82 13 11.83 2zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zM13 19.54l-4.27-4.27A2.5 2.5 0 0110.5 11c.69 0 1.32.28 1.77.74l.73.72.73-.73a2.5 2.5 0 013.54 3.54L13 19.54z",
    fill: "currentColor"
  }));
}
export default SvgLoyalty;