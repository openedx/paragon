function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRequestPageFill = function SvgRequestPageFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M450-240h60v-40h90v-190H420v-70h180v-60h-90v-40h-60v40h-90v190h180v70H360v60h90v40ZM160-80v-800h401l239 239v561H160Z",
    fill: "currentColor"
  }));
};
export default SvgRequestPageFill;