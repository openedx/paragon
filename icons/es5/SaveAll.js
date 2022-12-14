function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgSaveAll(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 6h11l4 4v11H6V6zm2 2h7v3H8V8zm5.5 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 2h12v2H4v10H2V2z",
    fill: "currentColor"
  }));
}
export default SvgSaveAll;