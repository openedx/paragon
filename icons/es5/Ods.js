function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgOds = function SvgOds(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M186-357h160v-246H186v246Zm50-50v-146h60v146h-60Zm164 50h138l22-23v-201l-22-22H400v246Zm50-50v-146h60v146h-60Zm163 50h160v-142H663v-54h110v-50H613v144h110v52H613v50ZM80-160v-640h800v640H80Zm60-60h680v-520H140v520Zm0 0v-520 520Z",
    fill: "currentColor"
  }));
};
export default SvgOds;