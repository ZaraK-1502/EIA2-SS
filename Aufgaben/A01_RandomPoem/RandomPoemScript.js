"use strict";
var RandomPoemScript;
(function (RandomPoemScript) {
    //Arrays zu Erstellung der Zufallsgedichte
    let subjekt = ["Rick", "Deryl", "Rosita", "Neagen", "Carol", "Michone", "Judith", "Glenn", "Maggie"];
    let prädikat = ["tötet", "kämpft", "sticht", "rettet", "verfolgt", "erschlägt", "versteckt", "läuft"];
    let objekte = ["Messer", "nach Alexandia", "Schwert", "die Beißer", "die Flüsterer", "das Königreich"];
    //console.log(subjekt, prädikat, objekte);
    //For-Schleife um Gedicht zu erstellen bis Wert 1 erreicht ist
    for (let index = subjekt.length; index >= 1; index--) {
        //console.log(index);
        let poemFinal = getVerse(subjekt, prädikat, objekte);
        console.log(poemFinal);
    }
    function getVerse(_subjekt, _prädikat, _objekte) {
        let v1 = Math.floor(Math.random() * _subjekt.length);
        let v2 = Math.floor(Math.random() * _prädikat.length);
        let v3 = Math.floor(Math.random() * _objekte.length);
        let randomSentence = subjekt[v1] + " " + prädikat[v2] + " " + objekte[v3] + ".";
        //console.log(randomSentence);
        _subjekt.splice(v1, 1);
        _prädikat.splice(v2, 1);
        _objekte.splice(v3, 1);
        return randomSentence;
    }
})(RandomPoemScript || (RandomPoemScript = {}));
//# sourceMappingURL=RandomPoemScript.js.map