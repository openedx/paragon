function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSlideLibrary = function SvgSlideLibrary(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-160v-520h60v460h580v60H80Zm160-160v-480h418l-60 60H300v360h520v-298l60-60v418H240Zm300-169q-21 0-39-9t-31-26q14 0 24.5-10.5T505-559q0-22 15.5-37t37.5-15q22 0 37 15t15 37q0 29-20.5 49.5T540-489Zm119-114-57-57 186-184 56 56-185 185Z",
    fill: "currentColor"
  }));
};
export default SvgSlideLibrary;