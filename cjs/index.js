"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(url) {
  var params = {},
      search;

  if (typeof url != 'undefined') {
    var temp = url.split('?');
    if (temp.length != 2) return params;
    search = temp[1];
  } else if (location.search) {
    search = location.search.substr(1);
  } else {
    return params;
  }

  var parts = search.substr(0).split('&');

  for (var i = 0, c = parts.length; i < c; i++) {
    var nv = parts[i].split('=');
    if (!nv[0]) continue;
    params[nv[0]] = nv[1] ? decodeURIComponent(nv[1]) : true;
  }

  return params;
};

exports["default"] = _default;