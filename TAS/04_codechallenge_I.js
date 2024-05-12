const prompt = require('prompt-sync')({sigint: true});

// let ziffer1, ziffer2, zahl1, zahl2, summe;
// ziffer1 = prompt("Bitte Zahl 1 eingeben: ");
// ziffer2 = prompt("Bitte Zahl 2 eingeben: ");

// console.log("Datentyp: " + typeof ziffer1);
// console.log("Datentyp: " + typeof ziffer2);

// zahl1 = parseFloat(ziffer1);
// zahl2 = parseFloat(ziffer2);

// console.log("Datentyp: " + typeof zahl1);
// console.log("Datentyp: " + typeof zahl2);

// summe = zahl1 + zahl2;

// console.log("Die Summe der Zahlen ist: " + summe);

// Variante 2
// Kompaktere Lösung

// let zahl1, zahl2, summe;

// zahl1 = parseInt(prompt("Zahl 1: "));
// zahl2 = parseInt(prompt("Zahl 2: "));

// summe = zahl1 + zahl2;

// console.log("Die Summe der Zahlen ist: " + summe);

/*********** Variante 3  ****************/

console.log
(
    "Die Summe ist: " + 
    (    
    parseFloat(prompt("Bitte Zahl 1 eingeben ")) +
    parseFloat(prompt("Bitte Zahl 2 eingeben "))
)
)