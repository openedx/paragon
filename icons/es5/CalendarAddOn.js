function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCalendarAddOn = function SvgCalendarAddOn(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M700-80v-120H580v-60h120v-120h60v120h120v60H760v120h-60Zm-580-80v-660h125v-60h65v60h260v-60h65v60h125v362q-15-2-30-2t-30 2v-112H180v350h320q0 15 3 30t8 30H120Zm60-470h520v-130H180v130Zm0 0v-130 130Z",
    fill: "currentColor"
  }));
};
export default SvgCalendarAddOn;