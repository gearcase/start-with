'use strict';

module.exports = function (str, prefix, pos) {

  if (typeof prefix === 'undefined' || prefix === null) {
    return false;
  }

  str    = String(str);
  prefix = String(prefix);

  if(pos === undefined || pos < 0) {
    pos = 0;
  }
  else {
    pos = +pos || 0;
  }

  var l = prefix.length;
  var i = pos - 1;
  var j = 0;

  if (i > str.length) {
    return false;
  }

  while (++i < l) {
    if (str.charAt(i) !== prefix.charAt(j++)) {
      return false;
    }
  }

  return true;
};
