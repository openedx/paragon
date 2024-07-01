function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTaunt = function SvgTaunt(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M204-418q-21 11-44 5.5T126-439q-13-25-4.5-52t35.5-36l338-114 28 55-319 168Zm46 298v-254l353-186-18-35 220-109 27 55-282 211v318H250Zm50-460q-54 0-92-38t-38-92q0-54 38-92t92-38q54 0 92 38t38 92q0 54-38 92t-92 38Z",
    fill: "currentColor"
  }));
};
export default SvgTaunt;