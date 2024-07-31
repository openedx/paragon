function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCallLogFill = function SvgCallLogFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M740-80q-108 0-225-56.5T296-295Q193-397 136.5-514T80-740v-60h215l40 189-117 119q28 45 57.5 83.5T337-338q36 36 77 67.5t88 57.5l117-121 181 39v215h-60ZM500-820v-60h380v60H500Zm0 140v-60h380v60H500Zm0 140v-60h380v60H500Z",
    fill: "currentColor"
  }));
};
export default SvgCallLogFill;