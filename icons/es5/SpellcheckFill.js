function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSpellcheckFill = function SvgSpellcheckFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M563-80 404-239l42-42 117 117 240-240 42 42L563-80ZM120-312l200-527h66l200 527h-67l-54-142H238l-54 142h-64Zm137-200h189l-92-254h-5l-92 254Z",
    fill: "currentColor"
  }));
};
export default SvgSpellcheckFill;