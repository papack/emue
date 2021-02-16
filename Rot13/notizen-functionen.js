//
// Allgemeine Funktion
//

//definieren
function add(a, b) {
  let ergebnis = a + b;
  return ergebnis;
}

//ausgeben
console.log(add(2, 3));

//
// ausführliche version von kurzschreibweise rot13
//
let input = "abc";
let output = "nop";

//let index = (y) => input.indexOf(y);
function index(x) {
  return input.indexOf(x);
}

//let translate = (x) => (index(x) > -1 ? output[index(x)] : x);
function translate(x) {
  if (index(x) > -1) {
    return output[index(x)];
  } else {
    return x;
  }
}
