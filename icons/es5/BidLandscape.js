function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBidLandscape = function SvgBidLandscape(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-720h720v720H120Zm60-170v110h600v-356L530-286 353-463 180-290Zm0-85 173-173 177 177 250-250v-159H180v405Zm0-161v-85 250-177 258-173 177-250Zm0 161v-405 409-177 173Zm0 85v-173 177-250 356-110Z",
    fill: "currentColor"
  }));
};
export default SvgBidLandscape;