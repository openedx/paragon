function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgEvCharger = function SvgEvCharger(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M220-552h269v-228H220v228Zm0 372h269v-312H220v312Zm-60 60v-720h389v348h115v320h121v-438h-45v-120h20v-50h30v50h40v-50h30v50h20v120h-45v490H614v-322h-65v322H160Zm329-60H220h269Zm-152-34 88-140h-53v-105l-87 140h52v105Z",
    fill: "currentColor"
  }));
};
export default SvgEvCharger;