function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCropRotateFill = function SvgCropRotateFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M481 0q-94 0-177.5-33.5T155-126Q90-185 49-265T-1-438h61q6 76 41 143t89.5 118q54.5 51 124 82.5T459-59l-76-76 43-43L591-13q-26 7-55 10t-55 3Zm126-209v-85H296v-311h-85v-60h85v-85h60v396h396v60h-85v85h-60Zm0-205v-191H416v-60h251v251h-60Zm294-108q-6-76-41-143t-89.5-118q-54.5-51-124-82.5T502-901l76 76-43 43-165-165q26-7 55-10t56-3q93 0 177 33.5T806.5-834Q871-775 912-695t49 173h-60Z",
    fill: "currentColor"
  }));
};
export default SvgCropRotateFill;