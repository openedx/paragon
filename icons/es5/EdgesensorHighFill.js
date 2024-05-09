function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgEdgesensorHighFill = function SvgEdgesensorHighFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0-280v-280h60v280H0Zm120-120v-280h60v280h-60ZM240-80v-800h480v800H240Zm540-200v-280h60v280h-60Zm120-120v-280h60v280h-60ZM300-230h360v-500H300v500Z",
    fill: "currentColor"
  }));
};
export default SvgEdgesensorHighFill;