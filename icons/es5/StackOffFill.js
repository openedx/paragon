function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStackOffFill = function SvgStackOffFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M880-166 406-640h474v474ZM580-700v-120H226l-60-60h474v180h-60ZM837-37l-43-43H320v-474L140-734v354h120v60H80v-474l-43-43 43-43L880-80l-43 43Z",
    fill: "currentColor"
  }));
};
export default SvgStackOffFill;