function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHandGestureFill = function SvgHandGestureFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M890-759q0-54-38.5-92.5T759-890v-50q75 0 128 53t53 128h-50ZM240-40q-83 0-141.5-58.5T40-240h50q0 63 43.5 106.5T240-90v50Zm104 0L54-468l62-53 164 124v-443h60v360h107v-440h60v440h107v-400h60v400h106v-320h60v760H344Z",
    fill: "currentColor"
  }));
};
export default SvgHandGestureFill;