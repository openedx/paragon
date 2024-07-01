function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFoundationFill = function SvgFoundationFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M201-120v-166h-83v-60h83v-206L76-457l-36-47 440-336 440 336-37 47-125-96v207h83v60h-83v166h-60v-166H510v166h-60v-166H261v166h-60Zm60-226h189v-396L261-598v252Zm249 0h188v-252L510-742v396Z",
    fill: "currentColor"
  }));
};
export default SvgFoundationFill;