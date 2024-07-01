function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDualScreen = function SvgDualScreen(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m220-242 280 112v-588L220-830v588Zm-60 40v-678h60l340 120v718L160-202Zm340 2v-60h240v-560H220v-60h580v680H500Zm-280-42v-588 588Z",
    fill: "currentColor"
  }));
};
export default SvgDualScreen;