function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRebase = function SvgRebase(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m430-45-42-42 83-83H316q-10 39-42 64.5T200-80q-50 0-85-35t-35-85q0-42 25.5-74t64.5-42v-328q-39-10-64.5-42T80-760q0-50 35-85t85-35q42 0 74 25.5t42 64.5h155l-83-83 42-42 156 155-156 155-42-42 83-83H316q-8 32-31 55t-55 31v328q32 8 55 31t31 55h155l-83-83 42-42 156 155L430-45Zm330-35q-50 0-85-35t-35-85q0-41.98 25.5-73.99T730-316v-328q-39-10-64.5-42.01T640-760q0-50 35-85t85-35q50 0 85 35t35 85q0 42-25.5 74T790-644v328q39 10 64.5 42t25.5 74q0 50-35 85t-85 35Zm-560-60q25.5 0 42.75-17.25T260-200q0-25.5-17.25-42.75T200-260q-25.5 0-42.75 17.25T140-200q0 25.5 17.25 42.75T200-140Zm560 0q25.5 0 42.75-17.25T820-200q0-25.5-17.25-42.75T760-260q-25.5 0-42.75 17.25T700-200q0 25.5 17.25 42.75T760-140ZM200-700q25.5 0 42.75-17.25T260-760q0-25.5-17.25-42.75T200-820q-25.5 0-42.75 17.25T140-760q0 25.5 17.25 42.75T200-700Zm560 0q25.5 0 42.75-17.25T820-760q0-25.5-17.25-42.75T760-820q-25.5 0-42.75 17.25T700-760q0 25.5 17.25 42.75T760-700ZM200-200Zm560 0ZM200-760Zm560 0Z",
    fill: "currentColor"
  }));
};
export default SvgRebase;