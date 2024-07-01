function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgYourTripsFill = function SvgYourTripsFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M310-200h340v-60H310v60ZM200-80v-410q0-88 49-158.5T375-751v-19q0-44 30.5-77t74.5-33q44 0 74.5 33t30.5 77v19q77 32 126 102.5T760-490v410H200Zm235-688q5-1 20.5-1.5t24.5-.5q9 0 24.5.5T525-768v-2q0-20-12.5-35T480-820q-20 0-32.5 15T435-770v2Zm-29 378 74-56 74 56-28-91 74-53h-91l-29-96-29 96h-91l74 53-28 91Z",
    fill: "currentColor"
  }));
};
export default SvgYourTripsFill;