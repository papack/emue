"use strict";

function handleButtonClick() {
  const original = document.getElementById("original");
  const kodiert = document.getElementById("kodiert");

  kodiert.value = rot13(original.value);
}

function rot13(text) {
  return text;
}
