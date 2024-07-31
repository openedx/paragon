function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBlindFill = function SvgBlindFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m240-60-48-36 104-139-8-191q-2-51 5.5-109T317-637l-97 56v111h-60v-146l167-96q17-10 33-15t31-5q24 0 42.5 11.5T461-687l26 59q19 43 73 70.5T680-530v60h-46L863-75l-26 15-242-418q-42-10-86.5-40.5T441-585q-12 34-18.5 73.5T418-440l97 137v243h-60v-219l-85-95-10 154L240-60Zm218-714q-30 0-51.5-21.5T385-847q0-30 21.5-51.5T458-920q30 0 51.5 21.5T531-847q0 30-21.5 51.5T458-774Z",
    fill: "currentColor"
  }));
};
export default SvgBlindFill;