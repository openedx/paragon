function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDataTable = function SvgDataTable(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-720h720v720H120Zm60-500h600v-160H180v160Zm0 220h600v-160H180v160Zm0 220h600v-160H180v160Zm63-490v-60h60v60h-60Zm0 220v-60h60v60h-60Zm0 220v-60h60v60h-60Z",
    fill: "currentColor"
  }));
};
export default SvgDataTable;