"use strict";

//Erstell auswahl
let auswahl = ["Zahl fehlt", "Rot13", "Baum"];

//erstelle zufallszahl
let zufallszahl = Math.random();
zufallszahl = zufallszahl * 2;
zufallszahl = Math.round(zufallszahl);

//Gebe auswahlzufallszahl aus
console.log(auswahl[zufallszahl]);
