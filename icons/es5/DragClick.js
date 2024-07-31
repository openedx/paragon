function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDragClick = function SvgDragClick(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-240q-97 0-166-66t-74-163l63 20q11 64 60 106.5T480-300q75 0 127.5-52.5T660-480q0-67-42.5-116.5T511-657l-19-63q96 5 162 74t66 166q0 100-70 170t-170 70Zm0 160q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-9 .5-18t1.5-18l58 18v18q0 142 99 241t241 99q142 0 241-99t99-241q0-142-99-241t-241-99h-18l-18-58q9-1 18-1.5t18-.5q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-59-380L250-631l-50 151L80-880l400 120-151 50 171 171-79 79Z",
    fill: "currentColor"
  }));
};
export default SvgDragClick;