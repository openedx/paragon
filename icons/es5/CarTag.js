function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCarTag = function SvgCarTag(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M245.76-314q23.24 0 38.74-15.75Q300-345.5 300-368q0-23.33-15.75-39.67Q268.5-424 246-424q-23.33 0-39.67 16.26Q190-391.47 190-368.24q0 23.24 16.26 38.74 16.27 15.5 39.5 15.5ZM140-264v-210 210Zm20 60v84H80v-354l95-286h215v60H218l-55 166h352l60 60H140v210h600v-117l60-60v321h-80v-84H160Zm440.18-526q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5ZM705-429 450-684v-226h226l255 255-226 226Zm0-85 141-141-195-195H510v141l195 195Zm-68 200q23 0 38.5-15.5T691-368l-60-54q-21 1-35.5 16.5T581-368q0 22.5 16.33 38.25Q613.67-314 637-314Zm41-368Z",
    fill: "currentColor"
  }));
};
export default SvgCarTag;