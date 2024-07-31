function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCsv = function SvgCsv(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M188-357h160v-50H238v-146h110v-50H188v246Zm199 0h170v-142H437v-54h120v-50H387v144h120v52H387v50Zm271 0h57l75-246h-50l-53 183-47-183h-50l68 246ZM80-160v-640h800v640H80Zm60-60h680v-520H140v520Zm0 0v-520 520Z",
    fill: "currentColor"
  }));
};
export default SvgCsv;