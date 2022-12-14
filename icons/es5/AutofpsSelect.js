function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgAutofpsSelect(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12.03 6.3h-.06l-1.02 2.89h2.1zM3 17h2v5H3z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm-.63-10h1.25l2.63 7h-1.21l-.63-1.79h-2.83L9.96 12H8.74l2.63-7zM7 17h2v5H7zm4 0h2v5h-2zm4 0h6v5h-6z",
    fill: "currentColor"
  }));
}
export default SvgAutofpsSelect;