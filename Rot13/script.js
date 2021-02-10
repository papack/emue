"use strict";

function rot13(str) {
  //https://codereview.stackexchange.com/questions/132125/rot13-javascript
  var input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
  var index = (x) => input.indexOf(x);
  var translate = (x) => (index(x) > -1 ? output[index(x)] : x);
  return str.split("").map(translate).join("");
}
