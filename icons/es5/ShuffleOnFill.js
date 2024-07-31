function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgShuffleOnFill = function SvgShuffleOnFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M40-40v-881h881v881H40Zm536-120h224v-223h-60v121L564-436l-42 43 174 173H576v60Zm-374 0 538-537v120h60v-223H576v60h122L160-203l42 43Zm193-363 43-43-235-234-43 43 235 234Z",
    fill: "currentColor"
  }));
};
export default SvgShuffleOnFill;