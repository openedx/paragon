function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgClinicalNotes = function SvgClinicalNotes(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M680-330q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-60q25.5 0 42.75-17.25T740-450q0-25.5-17.25-42.75T680-510q-25.5 0-42.75 17.25T620-450q0 25.5 17.25 42.75T680-390ZM440-50v-169q37-23 76.5-39t81.5-27l82 106 82-106q42 8 81 26t77 40v169H440Zm60-60h157l-82-106q-20 8-39 17.5T500-178v68Zm203 0h157v-68q-17-11-35.5-20.5T786-216l-83 106Zm-46 0Zm46 0Zm-323-10H120v-720h720v307q-11-20-26-37t-34-30v-180H180v600h200v60ZM280-620h341q14-5 28.84-7.5T680-630v-50H280v60Zm0 170h220q0-15 2.5-30.5T510-510H280v60Zm0 170h152l81-35v-25H280v60Zm100 100H180v-600h600v180q-21.97-14.12-46.98-22.06Q708-630 680-630q-74.7 0-127.35 52.65Q500-524.7 500-450q0 35 12.5 66t34.5 55l-167 71v78Zm300-270Z",
    fill: "currentColor"
  }));
};
export default SvgClinicalNotes;