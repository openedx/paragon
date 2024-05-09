function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgViewListFill = function SvgViewListFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M350-160h530v-174H350v174ZM80-626h210v-174H80v174Zm0 233h210v-173H80v173Zm0 233h210v-174H80v174Zm270-233h530v-173H350v173Zm0-233h530v-174H350v174Z",
    fill: "currentColor"
  }));
};
export default SvgViewListFill;