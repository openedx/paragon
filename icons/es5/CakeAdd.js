function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCakeAdd = function SvgCakeAdd(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-80v-319h87v-242h243v-64q-20-14-30.5-30.53-10.5-16.54-10.5-39.88 0-14.59 5.5-28.09T390-827l50-53 50 53q10 10 16 23.5t6 28.09q0 23.34-11 39.88Q490-719 470-705v64h243v242h87v319H80Zm147-319h426v-182H227v182Zm-87 259h600v-199H140v199Zm87-259h426-426Zm-87 259h600-600Zm600-259H140h600Zm40-246v-90h-90v-60h90v-90h60v90h90v60h-90v90h-60Z",
    fill: "currentColor"
  }));
};
export default SvgCakeAdd;