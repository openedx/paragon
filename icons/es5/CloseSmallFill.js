function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCloseSmallFill = function SvgCloseSmallFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M328.28-286 286-328l151.72-152L286-631l42.28-42L480-521.39 630.72-673 673-631 521.28-480 673-328l-42.28 42L480-437.61 328.28-286Z",
    fill: "currentColor"
  }));
};
export default SvgCloseSmallFill;