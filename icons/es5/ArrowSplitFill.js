function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgArrowSplitFill = function SvgArrowSplitFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-448v-60h306l232-232H575v-60h225v225h-60v-122L491-448H160Zm415 288v-60h123L524-395l42-42 174 174v-122h60v225H575Z",
    fill: "currentColor"
  }));
};
export default SvgArrowSplitFill;