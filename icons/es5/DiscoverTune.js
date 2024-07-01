function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDiscoverTune = function SvgDiscoverTune(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M520-590v-60h130v-190h60v190h130v60H520Zm130 470v-410h60v410h-60Zm-400 0v-180H120v-60h320v60H310v180h-60Zm0-300v-420h60v420h-60Z",
    fill: "currentColor"
  }));
};
export default SvgDiscoverTune;