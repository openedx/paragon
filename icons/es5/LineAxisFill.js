function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLineAxisFill = function SvgLineAxisFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m140-185-46-46 300-300 160 161 93-104-249-238-258 258-46-46 300-300 293 280 165-185 42 41-164 185 163 156-43 43-160-153-136 153-160-159-254 254Z",
    fill: "currentColor"
  }));
};
export default SvgLineAxisFill;