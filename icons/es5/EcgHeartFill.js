function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgEcgHeartFill = function SvgEcgHeartFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M645-840q100 0 167.5 74T880-590q0 20-3 29.5t-9 50.5H621l-82-106h-44l-72 217-67-111H92q-6-40-9-49.5T80-589q0-103 67-177t167-74q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19ZM479-82 148-415q-8-8-15-16.5T120-450h199l90 134h51l70-217 56 83h253q-6 9-12.5 17.5T812-416L479-82Z",
    fill: "currentColor"
  }));
};
export default SvgEcgHeartFill;