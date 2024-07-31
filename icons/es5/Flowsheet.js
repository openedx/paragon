function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFlowsheet = function SvgFlowsheet(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M132-450v230-520 290Zm418 350q21 0 35.5-15t14.5-35q0-21-14.5-35.5T550-200q-20 0-35 14.5T500-150q0 20 15 35t35 15Zm260-420q21 0 35.5-15t14.5-35q0-21-14.5-35.5T810-620q-20 0-35 14.5T760-570q0 20 15 35t35 15Zm-570-20h200v-60H240v60Zm0 180h200v-60H240v60ZM72-160v-640h816v60H132v520h248v60H72ZM550-40q-46 0-78-32t-32-78q0-38 22.5-67t57.5-39v-134h260v-74q-35-10-57.5-39T700-570q0-46 32-78t78-32q46 0 78 32t32 78q0 38-22.5 67T840-464v134H580v74q35 10 57.5 39t22.5 67q0 46-32 78t-78 32Z",
    fill: "currentColor"
  }));
};
export default SvgFlowsheet;