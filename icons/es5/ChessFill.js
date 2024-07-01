function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgChessFill = function SvgChessFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-80v-240h132l24-170H170v-60h620v60H684l24 170h132v240H120Zm140-530-60-270q31 30 68 46.5t75 16.5q37 0 71.5-16t65.5-47q31 31 65.5 47t71.5 16q37 0 74.5-16.5T760-880l-60 270H260Z",
    fill: "currentColor"
  }));
};
export default SvgChessFill;