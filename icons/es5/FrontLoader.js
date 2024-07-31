function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFrontLoader = function SvgFrontLoader(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M150-170q-46.22 0-78.11-32.08Q40-234.17 40-280v-330h290v-200h207l110 110v180h60v-85l87-88 166 313H707v-80h-60v95q19 16 29.5 38.21T687-280q0 45.83-32.08 77.92Q622.83-170 577-170q-37 0-65.5-22T472-249H255q-11 35-39.5 57T150-170Zm-.19-60q20.81 0 35.5-14.32Q200-258.65 200-279.82q0-21.18-14.32-35.68-14.33-14.5-35.5-14.5-21.18 0-35.68 14.32-14.5 14.33-14.5 35.5 0 21.18 14.5 35.68t35.31 14.5Zm427.01 0q21.18 0 35.68-14.32 14.5-14.33 14.5-35.5 0-21.18-14.32-35.68-14.33-14.5-35.5-14.5-21.18 0-35.68 14.32-14.5 14.33-14.5 35.5 0 21.18 14.32 35.68 14.33 14.5 35.5 14.5ZM330-310v-240H100v173q11-6 24-9.5t26-3.5q37 0 66 22.5t39 57.5h75Zm60 0h81q10-35 39.5-57.5T577-390h10v-70H390v150Zm471-130-84-154-10 11v143h94Zm-471-80h197v-155l-75-75H390v230Zm-60 210v-80 13-173 240Zm60 0v-150 150Z",
    fill: "currentColor"
  }));
};
export default SvgFrontLoader;