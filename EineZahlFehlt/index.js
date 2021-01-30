// 1. ich muss die Zahlen zeilenweiße einlesen
// 2. sobald das funktioniert, muss die Datei sortiert werden
// 3. festellen, welche zahl fehlt

// in der zahl.txt datei fehlen Zahlen, welche sind es?

// 1.
//ich muss lange googeln, das ist am besten geeignet
// https://stackoverflow.com/questions/6831918/node-js-read-a-text-file-into-an-array-each-line-an-item-in-the-array
const fs = require("fs");
let zahlenArray = fs.readFileSync("zahl.txt").toString().split("\n");

//2.
//https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
//das Array muss sortiert werden
//Standartmäßig wird nach text sortiert (1 10 2 3 4 5 ...)
//da musste ich wieder googlen wie ich das Array
//nach Zahlen sortiere
zahlenArray.sort((a, b) => a - b);

//3.
//festellen welche Zahl fehlt
// schleife geht das ganz Array druch und schaut ob der "Vorgänger" eine "Lücke" hat
for (let i = 2; i < zahlenArray.length; i++) {
  if (!(zahlenArray[i] - 1 == zahlenArray[i - 1])) {
    console.log(i + " fehlt");
  }
}
