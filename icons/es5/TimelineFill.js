function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTimelineFill = function SvgTimelineFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M109.91-240Q81-240 60.5-260.59 40-281.18 40-310.09t20.49-49.41q20.5-20.5 49.28-20.5 5.23 0 10.23.5t13 2.5l200-200q-2-8-2.5-13t-.5-10.23q0-28.78 20.59-49.28Q371.18-670 400.09-670t49.41 20.63q20.5 20.64 20.5 49.61 0 1.76-3 22.76l110 110q8-2 13-2.5t10-.5q5 0 10 .5t13 2.5l160-160q-2-8-2.5-13t-.5-10.23q0-28.78 20.59-49.28Q821.18-720 850.09-720t49.41 20.59q20.5 20.59 20.5 49.5t-20.49 49.41q-20.5 20.5-49.28 20.5-5.23 0-10.23-.5t-13-2.5L667-423q2 8 2.5 13t.5 10.23q0 28.78-20.59 49.28Q628.82-330 599.91-330t-49.41-20.49q-20.5-20.5-20.5-49.28 0-5.23.5-10.23t2.5-13L423-533q-8 2-13 2.5t-10.25.5q-1.75 0-22.75-3L177-333q2 8 2.5 13t.5 10.23q0 28.78-20.59 49.28Q138.82-240 109.91-240Z",
    fill: "currentColor"
  }));
};
export default SvgTimelineFill;