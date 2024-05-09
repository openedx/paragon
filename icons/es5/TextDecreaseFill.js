function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTextDecreaseFill = function SvgTextDecreaseFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m40-200 220-560h80l220 560h-75l-57-150H172l-57 150H40Zm156-214h208L302-685h-4L196-414Zm414-36v-60h310v60H610Z",
    fill: "currentColor"
  }));
};
export default SvgTextDecreaseFill;