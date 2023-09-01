function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgRsvp = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M16 9h1.5l-1.75 6h-1.5L12.5 9H14l1 3.43L16 9zM5.14 13 6 15H4.5l-.85-2H2.5v2H1V9h5v4h-.86zm-.64-2.5h-2v1h2v-1zM23 13h-3.5v2H18V9h5v4zm-1.5-2.5h-2v1h2v-1zM11.5 9v1.5h-3v.75h3V15H7v-1.5h3v-.75H7V9h4.5z",
  fill: "currentColor"
}));
export default SvgRsvp;