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
    setTimeout(init, 1000);
    getvalue();
  } else {
    arr.splice(39, 1);
    arr.unshift(Math.random());
    count++;
    setTimeout(init, 1000);
    getvalue();
  }
}

function getvalue() {
  console.log("height", arr);

  let i = 0;

  arr.forEach((value, i) => {
    console.log(value);

    const classname = ".bar" + (i + 1);
    document.querySelector(classname).style.height = arr[i] * 100 + "px";
  });

  /*
  Ved at bruge class navnet .bar og + med 1 som vi har defineret som nul i en variabel = i. 
  Kan vi selecte hvert div element op til 40 igennem et forEarch loop.
  Det samme gælder for vores arr, hvor vi bruger i igen, der tæller op til 40. 
  document.querySelector(".bar2").style.height = arr[1] * 100 + "px";

*/
}
