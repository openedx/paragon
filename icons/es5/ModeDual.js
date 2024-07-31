function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgModeDual = function SvgModeDual(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M166-310q0 38 19.5 76.5T247-150l-44 43q-51-54-74-103t-23-100q0-41 11-86t36-105q23-57 32.5-91.5T195-658q0-36-20.5-71.5T109-807l40-45q54 50 80 97.5t26 97.5q0 38-10.5 80.5T210-477q-24 57-34 95t-10 72Zm160-1q0 38 19.5 77t61.5 84l-44 42q-51-54-74-102.5T266-310q0-41 11-86t36-105q23-57 32.5-91.5T355-658q0-36-20.5-72T269-808l40-44q54 50 80 97t26 97q0 38-10.5 81T370-477q-24 57-34 94.5T326-311ZM490-80v-800h60v194l150-150 42 43-192 192v91h91l189-189 43 42-147 147h194v60H726l148 149-41 42-192-191h-91v90l192 193-41 42-151-150v195h-60Z",
    fill: "currentColor"
  }));
};
export default SvgModeDual;