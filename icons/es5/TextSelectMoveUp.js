function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTextSelectMoveUp = function SvgTextSelectMoveUp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M130-120v-60h700v60H130Zm320-170v-261l-74 73-42-42 146-146 146 146-42 42-74-73v261h-60ZM130-780v-60h700v60H130Z",
    fill: "currentColor"
  }));
};
export default SvgTextSelectMoveUp;