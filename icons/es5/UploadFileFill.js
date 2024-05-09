function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgUploadFileFill = function SvgUploadFileFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M452-202h60v-201l82 82 42-42-156-152-154 154 42 42 84-84v201ZM160-80v-800h421l219 219v581H160Zm391-554h189L551-820v186Z",
    fill: "currentColor"
  }));
};
export default SvgUploadFileFill;