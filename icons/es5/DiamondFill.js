function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDiamondFill = function SvgDiamondFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m358-625 105-215h34l105 215H358Zm97 475L101-575h354v425Zm50 0v-425h354L505-150Zm153-475L553-840h207l107 215H658Zm-565 0 107-215h207L302-625H93Z",
    fill: "currentColor"
  }));
};
export default SvgDiamondFill;