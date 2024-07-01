function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFamilyLink = function SvgFamilyLink(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M400-47q-48 0-87-28.5T256-152q-10-27-28.5-42.5T186-210q-17 0-33.5 7.5T121-181l-41-43q22-22 49.5-34t56.5-12q42 0 76.5 27t52.5 74q11 29 34 45.5t51 16.5q19 0 35.5-7t27.5-19L142-587l358-358 358 358-342 484q-19 26-49.5 41T400-47Zm100-136 280-397-280-280-280 280 280 397Zm0-339Z",
    fill: "currentColor"
  }));
};
export default SvgFamilyLink;