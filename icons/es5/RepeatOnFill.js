function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRepeatOnFill = function SvgRepeatOnFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M100-40q-24 0-42-18t-18-42v-761q0-23 18-41.5t42-18.5h761q23 0 41.5 18.5T921-861v761q0 24-18.5 42T861-40H100Zm180-40 42-44-86-86h524v-220h-60v160H236l86-86-42-44-160 160L280-80Zm-80-450h60v-160h464l-86 86 42 44 160-160-160-160-42 44 86 86H200v220Z",
    fill: "currentColor"
  }));
};
export default SvgRepeatOnFill;