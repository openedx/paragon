function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFlakyFill = function SvgFlakyFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-80q-85 0-158-30.5T195-195q-54-54-84.5-127T80-480q0-84 30.5-157T195-764q54-54 127-85t158-31q84 0 157 31t127 85q54 54 85 127t31 157q0 85-31 158t-85 127q-54 54-127 84.5T480-80ZM294-518l56-57 56 57 36-36-57-56 57-56-36-36-56 57-56-57-36 36 57 56-57 56 36 36Zm186 378q145 0 242.5-97.5T820-480q0-72-26-134t-72-108L238-238q46 46 108 72t134 26Zm82-123-89-89 35-36 54 54 100-99 35 35-135 135Z",
    fill: "currentColor"
  }));
};
export default SvgFlakyFill;