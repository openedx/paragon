function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCalendarViewWeekFill = function SvgCalendarViewWeekFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M510-160v-640h155v640H510Zm-215 0v-640h155v640H295Zm-215 0v-640h155v640H80Zm645 0v-640h155v640H725Z",
    fill: "currentColor"
  }));
};
export default SvgCalendarViewWeekFill;