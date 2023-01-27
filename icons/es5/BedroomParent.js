function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgBedroomParent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 12h11v2h-11zm.75-3.5h4v2h-4zm5.5 0h4v2h-4z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 2H2v20h20V2zm-3 15h-1.5v-1.5h-11V17H5v-5l.65-.55V7H11c.37 0 .72.12 1 .32.28-.2.63-.32 1-.32h5.35v4.45L19 12v5z",
    fill: "currentColor"
  }));
}

export default SvgBedroomParent;