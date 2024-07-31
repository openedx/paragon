function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgControlCameraFill = function SvgControlCameraFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-375q-44 0-74.5-30.5T375-480q0-44 30.5-74.5T480-585q44 0 74.5 30.5T585-480q0 44-30.5 74.5T480-375Zm-1 296L301-258l42-42 135 136 137-137 43 43L479-79ZM258-300 79-478l179-179 42 42-136 136 137 136-43 43Zm84-357-42-43 178-178 179 178-42 42-136-136-137 137Zm358 357-42-43 135-135-136-137 43-43 179 179-179 179Z",
    fill: "currentColor"
  }));
};
export default SvgControlCameraFill;