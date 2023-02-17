function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgSettingsApplications(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1.75 9c0 .24-.02.47-.05.71l.01-.02 1.47 1.16c.14.1.23.18.23.18l-1.7 2.94-2.02-.8.02-.03c-.37.29-.77.53-1.21.71h.01l-.27 1.85c-.02.17-.04.3-.04.3h-3.4l-.31-2.15H10a5.06 5.06 0 01-1.21-.71l.02.03-2.02.8-1.7-2.94s.1-.08.23-.18l1.47-1.16.01.02c-.03-.24-.05-.47-.05-.71s.02-.47.05-.69l-.01.01-1.7-1.34 1.7-2.95 2.01.81v.01c.37-.28.77-.52 1.2-.7h-.01L10.3 5h3.41l.3 2.15H14c.43.18.83.42 1.2.7v-.01l2.01-.81 1.7 2.95-1.71 1.34-.01-.01c.04.22.06.45.06.69z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 2.45
  }));
}

export default SvgSettingsApplications;