function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgArtistFill = function SvgArtistFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M692-160q-47 0-76-29t-29-76q0-47 29-76t76-29q17 0 31 4t25 12v-206h132v60h-83v235q0 47-29 76t-76 29ZM400-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM80-160v-94q0-32 17-61.5t51-44.5q75-33 133.5-46.5T400-420q47 0 90.5 7.5T581-388q-53 46-61 113t40 115H80Z",
    fill: "currentColor"
  }));
};
export default SvgArtistFill;