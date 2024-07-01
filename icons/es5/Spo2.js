function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSpo2 = function SvgSpo2(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M452-166v-228h168v228H452Zm48-48h72v-132h-72v132ZM680-80v-144h132v-48H680v-48h180v144H728v48h132v48H680Zm-300-1q-131-8-215.5-100.5T80-408q0-100 79.5-217.5T400-880q134 114 214.5 220T714-466h-62q-19-71-84-157.5T400-800Q273-688 206.5-587.5T140-408q0 109 67.5 184T380-141v60Zm16-327Z",
    fill: "currentColor"
  }));
};
export default SvgSpo2;