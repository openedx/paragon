function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgOutboxAlt = function SvgOutboxAlt(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m245-261 452-221-452-221v442Zm60-90v-74l132-57-132-57v-74l283 131-283 131ZM120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0 0v-600 600Z",
    fill: "currentColor"
  }));
};
export default SvgOutboxAlt;