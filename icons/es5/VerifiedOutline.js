function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgVerifiedOutline(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7.77 11.42l2.32 2.33 5.86-5.88 1.48 1.49-7.34 7.36-3.8-3.81 1.48-1.49z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.56 9.2L23 11.99l-2.44 2.8.34 3.69-3.61.82-1.89 3.19-3.4-1.46-3.4 1.47-1.89-3.2-3.61-.82.34-3.7L1 11.99 3.44 9.2 3.1 5.5l3.61-.81L8.6 1.5 12 2.96l3.4-1.46 1.89 3.19 3.61.82-.34 3.69zm-2.07 4.92l.56-.65 1.28-1.48-1.29-1.47-.56-.65.08-.85.18-1.95L16 6.45l-.44-.74-.99-1.68-1.78.77-.79.34-.8-.34-1.78-.77-.99 1.68-.44.74-2.74.62.18 1.94.09.86-.56.65L3.67 12l1.29 1.47.56.65-.08.85-.18 1.96 2.74.62.44.74.99 1.67 1.78-.77.79-.34.8.34 1.78.77.99-1.68.44-.74 2.74-.62-.18-1.95-.08-.85z",
    fill: "currentColor"
  }));
}
export default SvgVerifiedOutline;