function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgBakeryDining(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.36 7.58l-.86 9.41H17l3.16-7.89zM3.84 9.1L7 16.99h1.5l-.86-9.41zM10 16.99h4L15 6H9zm10.32-4.24l-1.81 4.5 1.95.96 2.06-1.22zM1.48 16.99l2.06 1.22 1.95-.96-1.81-4.5z",
    fill: "currentColor"
  }));
}
export default SvgBakeryDining;