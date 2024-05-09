function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgJumpToElement = function SvgJumpToElement(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M440-440v-140h60v80h80v60H440Zm300 0v-60h80v-80h60v140H740ZM440-740v-140h140v60h-80v80h-60Zm380 0v-80h-80v-60h140v140h-60ZM122-80l-42-42 258-258H120v-60h320v320h-60v-218L122-80Z",
    fill: "currentColor"
  }));
};
export default SvgJumpToElement;