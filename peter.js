"use strict";
document.addEventListener("DOMContentLoaded", init);

// GLOBAL

//tilføj 40 * 0 til array
const arr = [];
let count = 0;

let setvalue;

function init() {
  console.log(arr);
  counting();
}
// udskift count med blackbox math.random
function counting() {
  Math.random;

  if (count < 40) {
    count++;
    arr.unshift(Math.random());
    setTimeout(init, 100);
    createBox();
  } else {
    arr.splice(39, 1);
    arr.unshift(Math.random());
    count++;
    setTimeout(init, 100);
  }
}

function createBox() {
  const clone = document.querySelector("#boxtemplate").content.cloneNode(true);

  const box = clone.querySelector("#box");

  box.style.height = getRandomNumber() + "px";

  const elm = document.querySelector("#container").appendChild(clone);
}

function createBoxes() {
  count++;

  if (count < 40) {
    createBox();
  } else {
  }
}

function getRandomNumber() {
  const num = Math.random() * 100;
  return num;
}
