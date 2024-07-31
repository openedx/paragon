function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgArtist = function SvgArtist(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M748-560h132v60h-83v235q0 47-29 76t-76 29q-47 0-76-29t-29-76q0-47 29-76t76-29q17 0 31 4t25 12v-206ZM80-160v-94q0-32 17-61.5t51-44.5q75-33 133.39-46.5Q339.78-420 400-420q47 0 90.5 7.5T581-388q-12 11-21.09 22.65Q550.82-353.7 544-340q-32-10-68-15t-76-5q-58 0-109 11t-119 43q-16 8-24 22.5t-8 29.5v34h390q4 19 11.5 34t18.5 26H80Zm320-321q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm0-60q39 0 64.5-25.5T490-631q0-39-25.5-64.5T400-721q-39 0-64.5 25.5T310-631q0 39 25.5 64.5T400-541Zm0-90Zm0 411Z",
    fill: "currentColor"
  }));
};
export default SvgArtist;