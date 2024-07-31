function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgExploreNearby = function SvgExploreNearby(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-202q40-41 71.65-84.1 27.13-36.81 49.74-80.81Q624-490.9 624-534q0-60-42-102t-102-42q-60 0-102 42t-42 101.63q0 43.37 22.61 87.39t49.74 80.86Q440-323 480-282Zm0-198q-22.5 0-38.25-15.75T426-534q0-22.5 15.75-38.25T480-588q22.5 0 38.25 15.75T534-534q0 22.5-15.75 38.25T480-480Z",
    fill: "currentColor"
  }));
};
export default SvgExploreNearby;