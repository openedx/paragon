function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgTypeSpecimen(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M4 6H2v16h16v-2H4z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 2H6v16h16V2zm-5.37 12.5l-.8-2.3H12.2l-.82 2.3H9.81l3.38-9h1.61l3.38 9h-1.55z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.96 7.17l-1.31 3.72h2.69l-1.3-3.72z",
    fill: "currentColor"
  }));
}
export default SvgTypeSpecimen;