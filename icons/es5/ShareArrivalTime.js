function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgShareArrivalTime(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm10.5 8c0 .69-.28 1.32-.73 1.77l1.41 1.41c.82-.81 1.32-1.94 1.32-3.18s-.5-2.37-1.32-3.18l-1.41 1.41c.45.45.73 1.08.73 1.77zm3.5 0c0 1.66-.67 3.16-1.76 4.24l1.41 1.41C23.1 16.21 24 14.21 24 12s-.9-4.21-2.35-5.65l-1.41 1.41A5.944 5.944 0 0122 12zm-10.19 2.42l-1.39 1.39L7 12.39V8h2v3.61l2.81 2.81z",
    fill: "currentColor"
  }));
}

export default SvgShareArrivalTime;