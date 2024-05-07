function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPeople = function SvgPeople(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.002 10.998c1.66 0 2.99-1.34 2.99-3s-1.33-3-2.99-3c-1.66 0-3 1.34-3 3s1.34 3 3 3Zm-8 0c1.66 0 2.99-1.34 2.99-3s-1.33-3-2.99-3c-1.66 0-3 1.34-3 3s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5v2.5h14v-2.5c0-2.33-4.67-3.5-7-3.5Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45v2.5h6v-2.5c0-2.33-4.67-3.5-7-3.5Z",
    fill: "currentColor"
  }));
};
export default SvgPeople;