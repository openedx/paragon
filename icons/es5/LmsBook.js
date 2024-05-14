function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLmsBook = function SvgLmsBook(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 22a3.372 3.372 0 0 1-2.475-1.025A3.372 3.372 0 0 1 4 18.5v-13c0-.967.342-1.792 1.025-2.475A3.372 3.372 0 0 1 7.5 2H20v15c-.417 0-.77.146-1.063.438A1.446 1.446 0 0 0 18.5 18.5c0 .417.146.77.438 1.063.291.291.645.437 1.062.437v2H7.5ZM6 15.325c.233-.117.475-.2.725-.25.25-.05.508-.075.775-.075H8V4h-.5c-.417 0-.77.146-1.063.438A1.447 1.447 0 0 0 6 5.5v9.825ZM10 15h8V4h-8v11Zm-2.5 5h9.325c-.1-.233-.18-.47-.238-.712a3.354 3.354 0 0 1-.087-.788c0-.267.025-.525.075-.775.05-.25.133-.492.25-.725H7.5c-.433 0-.792.146-1.075.438A1.468 1.468 0 0 0 6 18.5c0 .433.142.792.425 1.075.283.283.642.425 1.075.425Z",
    fill: "currentColor"
  }));
};
export default SvgLmsBook;