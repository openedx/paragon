function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTapasFill = function SvgTapasFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M250-40v-370H150q-37.8 0-63.9-26.14t-26.1-64Q60-538 86.1-564t63.9-26h100v-60H150q-37.8 0-63.9-26.14t-26.1-64Q60-778 86.1-804t63.9-26h100v-90h60v90h100q37.8 0 63.9 26.14t26.1 64Q500-702 473.9-676T410-650H310v60h100q37.8 0 63.9 26.14t26.1 64Q500-462 473.9-436T410-410H310v370h-60Zm350 0v-60h90v-304q-57-11-93.5-55.02T560-560v-360h320v360q0 57-36.5 101T750-404v304h90v60H600Zm20-660h200v-160H620v160Z",
    fill: "currentColor"
  }));
};
export default SvgTapasFill;