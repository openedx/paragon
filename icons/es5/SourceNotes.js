function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSourceNotes = function SvgSourceNotes(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M180-180v-600 600Zm100-440h400v-60H280v60Zm0 170h226q17.91-18.09 38.96-33.55Q566-499 589-510H280v60Zm0 170h142.66q2.34-16 5.81-30.92 3.48-14.91 8.53-29.08H280v60ZM120-120v-720h720v325q-14-6-29-11t-31-8v-246H180v600h246q3 16 8 31t11 29H120Zm600 80q-73 0-127.5-45.5T524-200h62q13 44 49.5 72t84.5 28q58 0 99-41t41-99q0-58-41-99t-99-41q-29 0-54 10.5T622-340h58v60H520v-160h60v57q27-26 63-41.5t77-15.5q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z",
    fill: "currentColor"
  }));
};
export default SvgSourceNotes;