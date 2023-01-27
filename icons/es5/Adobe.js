function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgAdobe(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18.97 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h13.97c1.1 0 2-.9 2-2V5a2 2 0 00-2-2zm-1.59 13.98c-.03.01-.07.02-.1.02h-2.26a.49.49 0 01-.46-.3l-2.46-5.74c-.02-.06-.08-.09-.13-.07a.12.12 0 00-.07.07l-1.53 3.65c-.03.07 0 .14.07.17.02.01.03.01.05.01h1.68c.1 0 .2.06.24.16l.74 1.64c.07.15-.01.33-.16.4-.06 0-.1.01-.14.01H6.73c-.15 0-.28-.13-.28-.28 0-.04.01-.07.02-.11l3.9-9.28c.08-.2.28-.33.49-.33h2.25c.22 0 .41.13.49.33l3.92 9.28c.07.14.01.31-.14.37z",
    fill: "currentColor"
  }));
}

export default SvgAdobe;