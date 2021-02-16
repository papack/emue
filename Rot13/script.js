"use strict";

function handleButtonClick() {
  const original = document.getElementById("original");
  const kodiert = document.getElementById("kodiert");

  kodiert.value = rot13(original.value);
}

function rot13(text) {
  let input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
  let index = (y) => input.indexOf(y);
  let translate = (x) => (index(x) > -1 ? output[index(x)] : x);
  return text.split("").map(translate).join("");
}
