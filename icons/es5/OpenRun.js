function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgOpenRun = function SvgOpenRun(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m480-165 88-88 43 42L480-80 349-211l43-42 88 88ZM165-480l88 88-42 43L80-480l131-131 42 43-88 88Zm630 0-88-88 42-43 131 131-131 131-42-43 88-88ZM480-795l-88 88-43-42 131-131 131 131-43 42-88-88Z",
    fill: "currentColor"
  }));
};
export default SvgOpenRun;