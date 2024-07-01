function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSyringe = function SvgSyringe(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m171-699-42-41 136-138 41 44-46 47 57 57 148-147 41 41-54 56 382 380-93 93 172 172h-84L699-265l-93 93-380-382-55 55-42-43 146-146-57-58-47 47Zm96 103 339 339 142-142-85-85-90 92-42-43 91-91-85-85-91 91-42-41 90-92-85-85-142 142Zm-7-7 142-142-142 142Z",
    fill: "currentColor"
  }));
};
export default SvgSyringe;