function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgProgressActivity = function SvgProgressActivity(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-80q-84 0-157-31t-127-85q-54-54-85-127T80-480q0-83.73 31-156.86Q142-710 196-764t127-85q73-31 157-31v60q-141.31 0-240.66 99.28Q140-621.44 140-480.22t99.28 240.72q99.28 99.5 240.5 99.5t240.72-99.34Q820-338.69 820-480h60q0 84-31 157t-85 127q-54 54-127.14 85Q563.73-80 480-80Z",
    fill: "currentColor"
  }));
};
export default SvgProgressActivity;