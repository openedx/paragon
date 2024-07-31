function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMpFill = function SvgMpFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M233-360h50v-190h57v127h50v-127h56v190h50v-240H233v240Zm317 0h50v-63h126v-177H550v240Zm50-113v-77h76v77h-76ZM120-120v-720h720v720H120Z",
    fill: "currentColor"
  }));
};
export default SvgMpFill;