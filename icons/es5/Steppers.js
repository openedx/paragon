function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSteppers = function SvgSteppers(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M180-365q-49 0-82-33t-33-82q0-49 33-82t82-33q49 0 82 33t33 82q0 49-33 82t-82 33Zm0-60q24 0 39.5-15.5T235-480q0-24-15.5-39.5T180-535q-24 0-39.5 15.5T125-480q0 24 15.5 39.5T180-425Zm300 60q-49 0-82-33t-33-82q0-49 33-82t82-33q49 0 82 33t33 82q0 49-33 82t-82 33Zm0-60q24 0 39.5-15.5T535-480q0-24-15.5-39.5T480-535q-24 0-39.5 15.5T425-480q0 24 15.5 39.5T480-425Zm300 60q-49 0-82-33t-33-82q0-49 33-82t82-33q49 0 82 33t33 82q0 49-33 82t-82 33Z",
    fill: "currentColor"
  }));
};
export default SvgSteppers;