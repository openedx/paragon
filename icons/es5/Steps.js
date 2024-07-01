function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSteps = function SvgSteps(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M742-140h62l16-92-197-197-76-227-137 32-30-29v-135l-54-27-182 245h149l449 430Zm-214 0h127L268-510H120l408 370Zm-23 60L27-514l281-377 132 66v134l147-38 88 267 205 205-30 177H505Z",
    fill: "currentColor"
  }));
};
export default SvgSteps;