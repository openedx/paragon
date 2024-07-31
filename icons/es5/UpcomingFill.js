function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgUpcomingFill = function SvgUpcomingFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-120v-335h271q0 54 37.5 90.5T480-328q54 0 91.5-36.5T609-455h271v335H80Zm633-415-43-43 135-135 43 43-135 135Zm-466 0L112-670l43-43 135 135-43 43Zm203-118v-187h60v187h-60Z",
    fill: "currentColor"
  }));
};
export default SvgUpcomingFill;