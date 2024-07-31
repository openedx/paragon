function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFeatureSearch = function SvgFeatureSearch(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m727-441 60 60v301H77v-710h326q-6 15-9.6 29.88-3.6 14.88-5.4 30.12H137v590h590v-301Zm37-165 132 132-43 43-133-133q-21 16-46.5 24t-52.5 8q-72.5 0-123.25-50.75T447-706q0-72.5 50.75-123.25T621-880q72.5 0 123.25 50.75T795-706q0 26-8 52t-23 48Zm-142.92 14Q669-592 702-625.08q33-33.09 33-81Q735-754 701.92-787q-33.09-33-81-33Q573-820 540-786.92q-33 33.09-33 81Q507-658 540.08-625q33.09 33 81 33ZM137-441v301-590 258-8 39Z",
    fill: "currentColor"
  }));
};
export default SvgFeatureSearch;