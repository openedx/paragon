function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFileMap = function SvgFileMap(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm300-59q98.01-82.58 146.01-153.58Q674-463.58 674-524q0-91-58.6-144-58.61-53-135.4-53t-135.4 53Q286-615 286-524q0 60 48.5 131T480-239Zm0-229q-23 0-39.5-16.5T424-524q0-23 16.5-39.5T480-580q23 0 39.5 16.5T536-524q0 23-16.5 39.5T480-468ZM180-180v-600 600Z",
    fill: "currentColor"
  }));
};
export default SvgFileMap;