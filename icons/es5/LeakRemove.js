function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgLeakRemove(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14 3h-2c0 1.35-.31 2.63-.84 3.77l1.49 1.49C13.51 6.7 14 4.91 14 3zm7 9v-2c-1.91 0-3.7.49-5.27 1.35l1.49 1.49c1.15-.53 2.43-.84 3.78-.84zm0 4v-2c-.79 0-1.54.13-2.24.37l1.68 1.68c.19-.01.37-.05.56-.05zM10 3H8c0 .19-.04.37-.06.56l1.68 1.68c.25-.7.38-1.46.38-2.24zm-5.59-.14L3 4.27l2.84 2.84C5.03 7.67 4.06 8 3 8v2c1.61 0 3.09-.55 4.27-1.46L8.7 9.97A8.99 8.99 0 013 12v2c2.72 0 5.2-.99 7.11-2.62l2.51 2.51C10.99 15.81 10 18.29 10 21h2c0-2.16.76-4.14 2.03-5.7l1.43 1.43A6.972 6.972 0 0014 21h2c0-1.06.33-2.03.89-2.84L19.73 21l1.41-1.41L4.41 2.86z",
    fill: "currentColor"
  }));
}

export default SvgLeakRemove;