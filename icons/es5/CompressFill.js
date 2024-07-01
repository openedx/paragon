function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCompressFill = function SvgCompressFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-410v-70h640v70H160Zm0-121v-60h640v60H160ZM449-80v-158l-77 76-42-42 149-148 147 148-42 42-75-76v158h-60Zm30-568L331-796l42-42 75 76v-158h60v158l77-76 42 42-148 148Z",
    fill: "currentColor"
  }));
};
export default SvgCompressFill;