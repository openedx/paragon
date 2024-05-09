function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSettingsOverscanFill = function SvgSettingsOverscanFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M263-406v-148l-75 74 75 74Zm217 137 74-75H407l73 75Zm-73-347h147l-74-74-73 74Zm292 211 74-74-74-75v149ZM80-160v-640h800v640H80Z",
    fill: "currentColor"
  }));
};
export default SvgSettingsOverscanFill;