function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHeapSnapshotThumbnail = function SvgHeapSnapshotThumbnail(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M40-200v-560h560v560H40Zm640-320v-240h240v240H680Zm60-60h120v-120H740v120ZM100-260h440v-440H100v440Zm580 60v-240h240v240H680Zm60-60h120v-120H740v120Zm-640 0v-440 440Zm640-320v-120 120Zm0 320v-120 120Zm-319.5-70q20.5 0 35-15t14.5-35.5q0-20.5-14.58-35Q440.83-430 420-430q-20 0-35 14.58-15 14.59-15 35.42 0 20 15 35t35.5 15ZM218-336l246-246-42-42-246 246 42 42Zm2.5-194q20.5 0 35-15t14.5-35.5q0-20.5-14.58-35Q240.83-630 220-630q-20 0-35 14.58-15 14.59-15 35.42 0 20 15 35t35.5 15Z",
    fill: "currentColor"
  }));
};
export default SvgHeapSnapshotThumbnail;