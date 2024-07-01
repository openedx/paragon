function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMailOff = function SvgMailOff(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M397-477Zm166-6ZM786-88l-72-72H80v-640h80l60 60h-80v520h514L55-819l43-43 731 731-43 43Zm94-78-60-60v-459L543-503l-36-36 309-201H306l-60-60h634v634Z",
    fill: "currentColor"
  }));
};
export default SvgMailOff;