function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLaundry = function SvgLaundry(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M165-480 45-688l264-152h51q16 45 45 82.5t75 37.5q47 0 76-37.5t44-82.5h51l263 153-119 207-75-41v216l-60 51v-369l113 62 59-104-188-110q-26 53-70 84t-94 31q-49 0-93.5-31T316-775L127-665l61 104 112-62v225q-15 2-30.5 6.5T240-380v-141l-75 41Zm22 291-39-46 79-67q23-19 51-29t57-10q29 0 56.5 10t50.5 29l116 99q14 12 31.5 17.5T626-180q18 0 36-5.5t32-17.5l79-69 39 47-79 67q-23 19-50.5 28.5T626-120q-29 0-57-9.5T518-158l-115-99q-14-12-32-17.5t-36-5.5q-19 0-36.5 5.5T267-257l-80 68Zm293-471Z",
    fill: "currentColor"
  }));
};
export default SvgLaundry;