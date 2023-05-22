function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgBsTrello(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "none",
    className: "bs-trello_svg__bi bs-trello_svg__bi-trello",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14.1 0H1.903C.852 0 .002.85 0 1.9v12.19A1.902 1.902 0 001.902 16h12.199A1.902 1.902 0 0016 14.09V1.9A1.902 1.902 0 0014.1 0zM7 11.367a.636.636 0 01-.64.633H3.593a.633.633 0 01-.63-.633V3.583c0-.348.281-.631.63-.633h2.765c.35.002.632.284.633.633L7 11.367zm6.052-3.5a.633.633 0 01-.64.633h-2.78A.636.636 0 019 7.867V3.583a.636.636 0 01.633-.633h2.778c.35.002.631.285.631.633l.01 4.284z",
    fill: "currentColor"
  }));
}
export default SvgBsTrello;