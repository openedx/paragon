function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBrowseActivity = function SvgBrowseActivity(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-590v-250h800v250h-60v-190H140v190H80Zm0 350v-290h60v230h680v-230h60v290H80Zm0-290v-60h259l63 128 140-246h38l58 118h242v60H600l-42-85-140 245h-37l-80-160H80ZM40-120v-60h880v60H40Zm440-420Z",
    fill: "currentColor"
  }));
};
export default SvgBrowseActivity;