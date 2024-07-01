function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgThingsToDo = function SvgThingsToDo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-120v-60h162v-192h-90v-60h91q5-84 61-139t146-65v-204h268v146H510v58q90 10 146 65t61 139h91v60h-90v192h162v60H80Zm222-60h148v-192H302v192Zm208 0h148v-192H510v192ZM305-432h350q-5-64-54-105t-121-41q-72 0-121 41t-54 105Zm175 0Z",
    fill: "currentColor"
  }));
};
export default SvgThingsToDo;