function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStrokeFull = function SvgStrokeFull(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M447-80q-82 0-155-31.5t-127.5-86Q110-252 78.5-325T47-480q0-83 31.5-156t86-127Q219-817 292-848.5T447-880q83 0 156 31.5T730-763q54 54 85.5 127T847-480q0 82-31.5 155T730-197.5q-54 54.5-127 86T447-80Zm47-63q113-16 193.5-96.5T784-433L494-143ZM111-529l287-287q-112 17-191 96t-96 191Zm14 157 431-430q-17-6-34.5-10t-35.5-6L109-441q2 18 6 35t10 34Zm61 110 479-479q-12-10-24.5-18.5T614-776L151-313q8 14 16.5 26.5T186-262Zm94 78 463-464q-8-14-16.5-26T708-698L230-219q12 10 24 18.5t26 16.5Zm128 42 377-377q-2-18-6-35.5T769-589L338-158q17 6 34.5 10t35.5 6Z",
    fill: "currentColor"
  }));
};
export default SvgStrokeFull;