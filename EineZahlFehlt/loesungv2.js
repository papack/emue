welcheZahlFehlt = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  91,
  92,
  93,
  94,
  95,
  96,
  97,
  98,
  99,
];

//So löse ich die Aufgabe
// 1. kann ich Emojis anstatt von Variablen verwenden? Mal versuchen. (Ehrlich gesagt habe ich mir sonst keine Gedanken über weitere schritte gemacht)
// Also auf google gegangen und gegooglet. Ja es sollte gehen. Dann hab ich es versucht, aber es kam ein Fehler.
// Dann gegoogelt nach "use emojis with node". Gefunden das es folgendes Paket gibt: npm install --save node-emoji.
// Habe eine package.json angelegt (npm --init) und das Paket installiert und dann ein Hello World mit Emojis geschrieben.

/*
let 👋 = "Hello World";
console.log(👋);
*/

// Dann habe ich gemerkt, das das immernoch nicht geht. Die Erweiterung ist nur um Emojis auf der Konsole auszugeben.
// Schade. Ich google wieder.

//https://stackoverflow.com/questions/57191148/typescript-doesnt-like-my-variable-name-and-i-cant-suppress-the-error

//In diesem Thred hat jemand versucht einen Schneeman als. Es geht nicht. Schade. Aber der Versuch war lustig.

//
//Teil 2
//

//ok. von Teil 1 sollte niemand erfahren 😅. Aber vielleicht gehen ja chinesiche Zeichen als variablennamen??
// mal versuchen

let 恩特·苏斯·绍尔 = "Hello World";
console.log(恩特·苏斯·绍尔);

//Das geht :D
// Jetzt könnte man ja anfangen die Zahlen durchzugehen. mit einer Forschleife. und prüfen welche fehlt. Aber das wäre langweilig.
// Gibt es vielleicht eine einfache Lösung.. Ich google
// --> anscheindet gibt es keine schnelle Lösung auf google.
//vielleicht klappt es, wenn ich alle Zahlen zusammenzähle. Dann die Zahlen von 1-99 auch zusammenzähle und die ergebnisse dann abziehe
//schauen wir mal

let summe1bis99 = 0;
for (let i = 1; i <= 99; i++) {
  summe1bis99 += i;
}
console.log(summe1bis99); // es kommt 4950 raus

// wie viel kommt raus, wenn man unser array aufsummiert

let summeUnserArray = 0;
for (let i = 0; i < welcheZahlFehlt.length; i++) {
  summeUnserArray += welcheZahlFehlt[i];
}
console.log(summeUnserArray); // 4908

console.log(summe1bis99 - summeUnserArray); // 42

// ja das geht :D. Wenns nicht geklappt hätte ich hätte ich eine schleife geschrieben die durchzählt. Aber es geht ja.

//ok jetzt haben wir das Ergebnis. Ich google nach einer Lösung wie man besser Zahlen aufsummieren kann. Vielleicht Gibt es da was besseres?
//ich finde nach längerem googlen diese Formel
//https://de.wikipedia.org/wiki/Gau%C3%9Fsche_Summenformel

// (n * (n+1))/2 -> die Formel vestehe ich nicht. Macht nichts. Ich verusche einfach ob sie geht

console.log((99 * (99 + 1)) / 2); // das ist auch 4950 -> ok das geht

//Mhh villeicht einen Oneliner schreiben?

let 绍 = welcheZahlFehlt;

//Ich brauche jetzt nur noch eine Zahl und zwar die größte. Das ist die Letzte zahl im Array.
//schauen wir mal ob das geht:
console.log(绍[绍.length - 1]); // = 99

//Ich frage mich grad was ich hier mache. Jetzt habe ich zwar die summe aller zahlen. Aber um alle Werte
// im Array zusammen zu zählen. das geht ja irgendwie nicht. auch nicht mit der tollen formel von Wikipedia.
// mmhh .. ich google wieder..
//https://stackoverflow.com/questions/3762589/fastest-javascript-summation
// richtig wenig code braucht man so: .reduce((pv, cv) => pv + cv, 0);
//vesuche wir mal

console.log(welcheZahlFehlt.reduce((pv, cv) => pv + cv, 0)); // 4908

//ok schein zu gehen. Ersetzten wir die zeichen durch chinesische#
//console.log(绍.reduce((恩, 特) => 恩 + 特, 0))); mhh das geht nicht.. mal suchen worna es liegt .. ahh eine Klammer zuviel

console.log(绍.reduce((恩, 特) => 恩 + 特, 0)); // 4908

//jetzt versuche ich alles zusammen zusetzen

console.log((绍[绍.length - 1] * (绍[绍.length + 1] - 1)) / 2); // nan .. da schein ein fehler drin zu sein

// wir war die funktion nochmal
console.log((99 * (99 + 1)) / 2);

// und jetzt vorsichtig einsetzen
console.log((绍[绍.length - 1] * (绍[绍.length - 1] + 1)) / 2); // 4950 ok das geht : hehe jetzt nur noch das aus zeile 183 abziehen

//
// Da ist sie. die Lösung die niemand mehr lesen kann :D
//

console.log(
  (绍[绍.length - 1] * (绍[绍.length - 1] + 1)) / 2 -
    绍.reduce((恩, 特) => 恩 + 特, 0)
);

//ich verusch weitere verschlimmbesserungen
// kann ich statt 1 auch true einsetzten?
// und statt 0 einfach false.
// das wäre lustig und super verwirrend xD
console.log(
  (绍[绍.length - true] * (绍[绍.length - true] + true)) / 2 -
    绍.reduce((恩, 特) => 恩 + 特, false)
);
// hehe geht :D

// kann man das irgendwie noch schlimmer machen?? Vielleicht die 2 wegmachen irgenwie?

// wir könnten ja Pi nehmen, abrunden und dann eins abziehen. Das rafft dann keiner mehr
console.log(
  (绍[绍.length - true] * (绍[绍.length - true] + true)) /
    (Math.round(Math.PI) - true) -
    绍.reduce((恩, 特) => 恩 + 特, false)
);

//das ist das ergebnis. Ich glaub ich muss es jetzt gescheit lösen :D
//(绍[绍.length - true] * (绍[绍.length - true] + true)) / (Math.round(Math.PI) - true) - 绍.reduce((恩, 特) => 恩 + 特, false)
