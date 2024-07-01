function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMarkAsUnreadFill = function SvgMarkAsUnreadFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-279v-431l344-170 394 203H687L424-813 140-672v393H80Zm90 159v-527h710v527H170Zm355-258 295-145v-64L525-445 230-587v64l295 145Z",
    fill: "currentColor"
  }));
};
export default SvgMarkAsUnreadFill;