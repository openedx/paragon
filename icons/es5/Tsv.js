function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTsv = function SvgTsv(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M245-357h50v-196h58v-50H186v50h59v196Zm138 0h160v-142H433v-54h110v-50H383v144h110v52H383v50Zm258 0h57l75-246h-50l-53 183-47-183h-50l68 246ZM80-160v-640h800v640H80Zm60-60h680v-520H140v520Zm0 0v-520 520Z",
    fill: "currentColor"
  }));
};
export default SvgTsv;