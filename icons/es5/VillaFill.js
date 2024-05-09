function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgVillaFill = function SvgVillaFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M370-120v-360h350q0-24.75 17.68-42.38Q755.35-540 780.18-540q24.82 0 42.32 17.62Q840-504.75 840-480v360H635v-170h-60v170H370Zm-250 0v-522l515-198v300H310v420H120Z",
    fill: "currentColor"
  }));
};
export default SvgVillaFill;