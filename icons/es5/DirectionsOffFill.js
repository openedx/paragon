function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDirectionsOffFill = function SvgDirectionsOffFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M833-41 652-222 480-50 50-480l215-215 249 248v87L26-848l43-43L876-84l-43 43ZM320-361h60v-130h90l-60-60h-60q-12 0-21 9t-9 21v160Zm418 53L603-444l77-77-116-116v86h-68L308-738l172-172 430 430-172 172Z",
    fill: "currentColor"
  }));
};
export default SvgDirectionsOffFill;