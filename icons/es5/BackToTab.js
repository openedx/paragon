function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBackToTab = function SvgBackToTab(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M340-497 140-697v177H80v-280h280v60H182l201 200-43 43ZM80-160v-290h60v230h340v60H80Zm740-280v-300H430v-60h450v360h-60Zm60 60v220H540v-220h340Z",
    fill: "currentColor"
  }));
};
export default SvgBackToTab;