function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDishwasher = function SvgDishwasher(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M180-560v380h600v-380H180Zm0-60h600v-160H180v160Zm299.91 353q-28.91 0-49.41-20.56Q410-308.13 410-337q0-27 17.5-59.5T480-477q35 48 52.5 80.5T550-337q0 28.87-20.59 49.44Q508.82-267 479.91-267ZM700-670q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9ZM120-120v-720h720v720H120Zm60-500v-160 160Z",
    fill: "currentColor"
  }));
};
export default SvgDishwasher;