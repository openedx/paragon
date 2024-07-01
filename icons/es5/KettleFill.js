function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgKettleFill = function SvgKettleFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M250-200v-533L140-880h580v130h100q24.75 0 42.38 17.62Q880-714.75 880-690v220q0 24.75-17.62 42.37Q844.75-410 820-410H720v210H250Zm470-270h100v-220H720v220ZM500-320h100v-440H500v440ZM120-80v-60h720v60H120Z",
    fill: "currentColor"
  }));
};
export default SvgKettleFill;