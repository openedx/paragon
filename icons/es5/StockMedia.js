function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStockMedia = function SvgStockMedia(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-360v-520h520v520H80Zm60-60h400v-400H140v400Zm181-80-57-71-65 91h283l-89-117-72 97ZM689.88-80Q644-80 612-112.12q-32-32.12-32-78T612.08-268q32.09-32 77.92-32 14.3 0 26.65 3 12.35 3 23.35 9v-212h140v60h-80v250q0 45.83-32.12 77.92Q735.76-80 689.88-80ZM140-420v-400 400Z",
    fill: "currentColor"
  }));
};
export default SvgStockMedia;