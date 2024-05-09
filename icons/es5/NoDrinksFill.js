function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgNoDrinksFill = function SvgNoDrinksFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M240-120v-60h210v-244L61-813l43-43 752 752-43 43-303-303v184h210v60H240Zm324-362L351-695h328l83-81H270l-64-64h634v60L564-482Z",
    fill: "currentColor"
  }));
};
export default SvgNoDrinksFill;