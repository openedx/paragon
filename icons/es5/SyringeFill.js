function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSyringeFill = function SvgSyringeFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m275-688-57-58-47 47-42-41 136-138 41 44-46 47 57 57 148-147 41 41-54 56 86 85-134 134 42 41 133-133 86 85-134 133 42 43 133-135 128 127-93 93 172 172h-84L699-265l-93 93-380-382-55 55-42-43 146-146Z",
    fill: "currentColor"
  }));
};
export default SvgSyringeFill;