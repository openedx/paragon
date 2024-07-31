function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHtmlFill = function SvgHtmlFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0-360v-240h48v89h108v-89h48v240h-48v-103H48v103H0Zm316 0v-192h-70v-48h188v48h-70v192h-48Zm160 0v-240h268v240h-48v-192h-62v150h-48v-150h-62v192h-48Zm326 0v-240h48v192h110v48H802Z",
    fill: "currentColor"
  }));
};
export default SvgHtmlFill;