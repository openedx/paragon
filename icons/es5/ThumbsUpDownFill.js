function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgThumbsUpDownFill = function SvgThumbsUpDownFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0-400v-351l209-209 39 44-34 156h266v102L371-400H0ZM751 0l-39-44 34-156H480v-102l109-258h371v351L751 0Z",
    fill: "currentColor"
  }));
};
export default SvgThumbsUpDownFill;