function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSkillet = function SvgSkillet(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-160v-320h580v-74l250-85 19 57-209 70v352H80Zm60-60h520v-200H140v200Zm260-100ZM178-560q5-38-3-65.5T140-692q-26-38-34-70.5t-3-77.5h57q-5 37 3.5 64.5T200-709q26 37 33.5 70.5T235-560h-57Zm170 0q5-38-3-65.5T310-692q-26-38-34-70.5t-3-77.5h57q-5 37 3 64.5t36 66.5q26 37 34 70.5t2 78.5h-57Zm170 0q5-38-3-65.5T480-692q-26-38-34-70.5t-3-77.5h57q-5 37 3 64.5t36 66.5q26 37 34 70.5t2 78.5h-57Z",
    fill: "currentColor"
  }));
};
export default SvgSkillet;