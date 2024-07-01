function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHandGesture = function SvgHandGesture(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M870-779q0-44-25-77.5T779-890v-50q62 0 101.5 48T920-779h-50ZM220-40q-75 0-127.5-52.65T40-220h50q0 54 38.07 92T220-90v50Zm124 0L54-468l62-53 164 124v-443h60v558L166-410l209 310h405v-700h60v760H344Zm103-440v-440h60v440h-60Zm167 0v-400h60v400h-60ZM507-290Z",
    fill: "currentColor"
  }));
};
export default SvgHandGesture;