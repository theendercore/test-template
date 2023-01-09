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

//makeWebsite()

//Kā un kāpēc to izmantot?

console.log("Function ", " speedFormula");

document.querySelector("#console").innerHTML +=
  'Function - <span class="val">speedFormula</span>';

document.querySelector("#console").innerHTML += "<br>";

console.log("test - 1 :", speedFormula(a, b));
document.querySelector("#console").innerHTML +=
  '└═─test 1: <span class="val">' + speedFormula(1, 1) + "</span>";

document.querySelector("#console").innerHTML += "<br>";

document.querySelector("#console").innerHTML += "<br>";

//--------

// console.log("Function - ", " speedFormula");
//! function (text, value)

// document.querySelector("#console").innerHTML +=
//   "Function - " + '<span class="val">' + "speedFormula" + "</span>";
//! function (text, value)

function log(string: string, value: any) {
  console.log(string, value);

  document.querySelector("#console").innerHTML +=
    string + '<span class="val">' + JSON.stringify(value) + "</span>";
}

//--------

// log("Function - ", "speedFormula");
// document.querySelector("#console").innerHTML += "<br>";

// log("└═─test 1: ", speedFormula(a, b));
// document.querySelector("#console").innerHTML += "<br>";

// document.querySelector("#console").innerHTML += "<br>";

//-------

function br() {
  document.querySelector("#console").innerHTML += "<br>";
}

// function log(string: string, value: any) {
//   console.log(string, value);
//   document.querySelector("#console").innerHTML +=
//     string + '<span class="val">' + JSON.stringify(value) + "</span>";
//   br();
// }

//-------
let c = 60;
let d = 3;

//*function "speedFormula()"

//? a,b & c, d

// Function - speedFormula
// └═─test 1: result
// └═─test 2: result
// └═─test 3: ...

function test(...args: any) {
  // test(0, 1, 2, 3, 4, 6, 7, 9, ...);

  let func = args[0];
  // test(speedFormula, ...)

  log("Function :", args[1]);
  //test(..., "speedFunction",...)

  //* function test(func: function, name: string, ...args: any) {

  //test(..., 0, 1, 2, ...)

  for (let i = 2; i < args.length; i++) {
    let text = "└═─test " + (i - 1) + ": ";

    //Check if array

    if (Array.isArray(args[i])) {
      //test(func, "funcName", [ a , b ], [ c , d ])
      log(text, func(...args[i]));
      //func(a,b)
    } else {
      //test(func, "funcName", a, b)
      log(text, func(args[i]));
      //func(a)
    }
  }
  br();
}

//-------

// test(speedFormula, "speedFormula", [a, b], [c, d]);

const multiplyByTwo = (a: number) => a * 2;

// test(multiplyByTwo, "multiplyByTwo", a, b, c, d, 10);

//-------

// test(arrayFunc, "arrayFunc", [a, b], [c, d])

// test(multiArrayFunc, "multiArrayFunc", [ [a, b], [c, d]])

// test(multiArrayFunc, "multiArrayFunc", [ [a, b], c])

let singleArray = "SingleArray";

const singleArrayFunc = (a: number[]): number => a[0];
// test(singleArrayFunc, "singleArrayFunc", [[a, b, c], singleArray]);

function testS(...args: any) {
  let func = args[0];
  log("Function :", args[1]);
  for (let i = 2; i < args.length; i++) {
    let text = "└═─test " + (i - 1) + ": ";
    if (Array.isArray(args[i])) {
      //args[i] = [ [a, b, c], singleArray]
      if (args[i][1] === "SingleArray") {
        log(text, func(args[i][0]));
      } else {
        log(text, func(...args[i]));
      }
    } else {
      log(text, func(args[i]));
    }
  }
  br();
}

// testS(singleArrayFunc, "singleArrayFunc", [[a, b, c], singleArray]);


//!-----Papildus
//JSON Stringify
//? screenLog( value )
//* [object Object]

//? screenLog( JSON.Stringify(value) )
//* { "key" : "value" }

//Snippets


