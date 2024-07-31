function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWebTrafficFill = function SvgWebTrafficFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M121-473v-60h126v60H121Zm114 231-40-40 88-88 40 40-88 88Zm48-397-88-88 40-40 88 88-40 40Zm457 480L552-347l-44 136-104-360 352 111-138 49 187 187-65 65ZM437-714v-126h60v126h-60Zm214 75-40-40 88-88 40 40-88 88Z",
    fill: "currentColor"
  }));
};
export default SvgWebTrafficFill;