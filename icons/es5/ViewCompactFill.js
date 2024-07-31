function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgViewCompactFill = function SvgViewCompactFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M880-170v-620 620ZM80-603v-187h177v187H80Zm207 0v-187h178v187H287Zm208 0v-187h178v187H495Zm208 0v-187h177v187H703Zm0 216v-186h177v186H703Zm-208 0v-186h178v186H495Zm-208 0v-186h178v186H287Zm-207 0v-186h177v186H80Zm623 217v-187h177v187H703Zm-208 0v-187h178v187H495Zm-208 0v-187h178v187H287Zm-207 0v-187h177v187H80Z",
    fill: "currentColor"
  }));
};
export default SvgViewCompactFill;