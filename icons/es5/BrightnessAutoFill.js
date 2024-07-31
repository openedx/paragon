function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBrightnessAutoFill = function SvgBrightnessAutoFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M310-305h55l37-109h159l38 109h53L505-697h-48L310-305Zm107-157 61-163h5l62 163H417Zm64 433L346-160H160v-186L26-480l134-134v-186h186l135-134 133 134h186v186l134 134-134 134v186H614L481-29Z",
    fill: "currentColor"
  }));
};
export default SvgBrightnessAutoFill;