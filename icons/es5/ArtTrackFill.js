function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgArtTrackFill = function SvgArtTrackFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M600-200H40v-560h560v560Zm100 0v-560h60v560h-60Zm160 0v-560h60v560h-60ZM156-357h325L381-490l-85 110-60-82-80 105Z",
    fill: "currentColor"
  }));
};
export default SvgArtTrackFill;