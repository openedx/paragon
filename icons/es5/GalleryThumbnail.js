function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgGalleryThumbnail = function SvgGalleryThumbnail(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M40-200v-560h560v560H40Zm640-320v-240h240v240H680Zm60-60h120v-120H740v120ZM100-260h440v-440H100v440Zm60-100h320L375-500l-75 100-55-73-85 113Zm520 160v-240h240v240H680Zm60-60h120v-120H740v120Zm-640 0v-440 440Zm640-320v-120 120Zm0 320v-120 120Z",
    fill: "currentColor"
  }));
};
export default SvgGalleryThumbnail;