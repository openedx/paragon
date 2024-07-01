function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStickyNote2Fill = function SvgStickyNote2Fill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M780-380H580v200l200-200ZM120-120v-720h720v480L600-120H120Zm180-300h170v-60H300v60Zm0-160h360v-60H300v60Z",
    fill: "currentColor"
  }));
};
export default SvgStickyNote2Fill;