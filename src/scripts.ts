import { log, test } from "./assets/helpers";

let sArray = "SingleArray";

// Kas ir abstrakcija ?
/*
    Loģisks process, kurā doma novēršas no kāda priekšmeta vai parādības nebūtiskajām,
    nejaušajām pazīmēm un izdala, fiksē to vispārīgās un būtiskās pazīmes; abstrahēšana.
*/

let a = 100;
let b = 20;

const speedFormula = (distance: number, time: number): number =>
  distance / time;

let result = a / b; //* 5
let resultTwo = speedFormula(a, b); //? 5

//Bet kā izmantot abstrakciju, un kāpēc?

console.log("Function ", " speedFormula");

document.querySelector("#console").innerHTML +=
  'Function - <span class="val">speedFormula</span>';

document.querySelector("#console").innerHTML += "<br>";

console.log("test - 1 :", speedFormula(1, 1));
document.querySelector("#console").innerHTML +=
  '└═─test 1: <span class="val">' + speedFormula(1, 1) + "</span>";

document.querySelector("#console").innerHTML += "<br>";

document.querySelector("#console").innerHTML += "<br>";
//--------

console.log("Function ", " speedFormula");
//! log (text, value)

document.querySelector("#console").innerHTML +=
  "Function - " + '<span class="val">' + "speedFormula" + "</span>";
//! log (text, value)
