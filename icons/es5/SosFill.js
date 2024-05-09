function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSosFill = function SvgSosFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M340-280v-400h280v400H340Zm-300 0v-60h180v-110H40v-230h240v60H100v110h180v230H40Zm640 0v-60h180v-110H680v-230h240v60H740v110h180v230H680Zm-280-60h160v-280H400v280Z",
    fill: "currentColor"
  }));
};
export default SvgSosFill;