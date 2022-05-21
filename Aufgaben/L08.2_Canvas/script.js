/*
Aufgabe: L08.1 Generative Kunst
Name: Zara Kocak
Matrikel: 270020
Datum: 12.05.22
Quelle: In zusammenarbeit mit Kenan Coskun
*/
// Hintergrund laden 
var AufgabeCanvas;
(function (AufgabeCanvas) {
    let canvas = document.body.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    // Hintergrund Farbübergänge 
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0.2, "#e75c4a");
        gradient.addColorStop(0.5, "#db700b");
        gradient.addColorStop(0.62, "#0b6cdb");
        gradient.addColorStop(0.9, "lightblue");
        gradient.addColorStop(0.92, "#f1de86");
        gradient.addColorStop(0.95, "#dd9d14");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    drawBackground();
    // Sonne mit Farbe und Verlauf 
    function drawSun() {
        let gradient2 = crc2.createRadialGradient(500, 300, 5, 500, 400, 200);
        gradient2.addColorStop(0.5, "yellow");
        gradient2.addColorStop(0.7, "#ffaf65");
        gradient2.addColorStop(1, "#ffaf65");
        crc2.moveTo(500, 300);
        crc2.arc(500, 300, 100, 0, Math.PI * 1., true);
        crc2.strokeStyle = "#ffaf65";
        crc2.stroke();
        crc2.fillStyle = "#ffaf65";
        crc2.fill();
    }
    drawSun();
    // Malen der ersten Möwe 
    function drawMoewe1() {
        crc2.beginPath();
        crc2.moveTo(650, 100);
        crc2.quadraticCurveTo(675, 75, 700, 100);
        crc2.moveTo(700, 100);
        crc2.quadraticCurveTo(725, 75, 750, 100);
        crc2.moveTo(750, 100);
        crc2.quadraticCurveTo(725, 85, 700, 100);
        crc2.moveTo(700, 100);
        crc2.quadraticCurveTo(675, 85, 650, 100);
        crc2.strokeStyle = "black";
        crc2.fillStyle = "black";
        crc2.stroke();
        crc2.fill();
    }
    drawMoewe1();
    // Malen der zweiten Möwe
    function drawMoewe2() {
        crc2.beginPath();
        crc2.moveTo(775, 75);
        crc2.quadraticCurveTo(800, 50, 825, 75);
        crc2.moveTo(825, 75);
        crc2.quadraticCurveTo(850, 50, 875, 75);
        crc2.moveTo(875, 75);
        crc2.quadraticCurveTo(850, 60, 825, 75);
        crc2.moveTo(825, 75);
        crc2.quadraticCurveTo(800, 60, 775, 75);
        crc2.strokeStyle = "black";
        crc2.fillStyle = "black";
        crc2.stroke();
        crc2.fill();
    }
    drawMoewe2();
    // Schwimmender Mensch (Arme)
    function drawMensch1() {
        crc2.beginPath();
        crc2.moveTo(650, 400);
        crc2.quadraticCurveTo(675, 375, 700, 400);
        crc2.moveTo(700, 400);
        crc2.quadraticCurveTo(725, 375, 750, 400);
        crc2.moveTo(750, 400);
        crc2.quadraticCurveTo(725, 385, 700, 400);
        crc2.moveTo(700, 400);
        crc2.quadraticCurveTo(675, 385, 650, 400);
        crc2.strokeStyle = "#eba96b";
        crc2.fillStyle = "#eba96b";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        //Kopf
        crc2.beginPath();
        crc2.moveTo(700, 375);
        crc2.arc(700, 380, 10, 0, Math.PI * 2., true);
        crc2.stroke();
        crc2.fillStyle = "#eba96b";
        crc2.fill();
        crc2.closePath();
        // Lächeln
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.arc(700, 380, 5, 0, Math.PI, false);
        crc2.stroke();
        crc2.closePath();
        //Augen
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.arc(695, 375, 2, 0, Math.PI * 2, true); // linkes Auge
        crc2.fill();
        crc2.arc(705, 375, 2, 0, Math.PI * 2, true); // rechtes Auge
        crc2.fill();
        crc2.closePath();
    }
    drawMensch1();
    // zweiter schwimmender Mensch (Arme)
    function drawMensch2() {
        crc2.beginPath();
        crc2.moveTo(450, 400);
        crc2.quadraticCurveTo(475, 375, 500, 400);
        crc2.moveTo(500, 400);
        crc2.quadraticCurveTo(525, 375, 550, 400);
        crc2.moveTo(550, 400);
        crc2.quadraticCurveTo(525, 385, 500, 400);
        crc2.moveTo(500, 400);
        crc2.quadraticCurveTo(475, 385, 450, 400);
        crc2.strokeStyle = "#eba96b";
        crc2.fillStyle = "#eba96b";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        // Kopf 
        crc2.beginPath();
        crc2.moveTo(500, 375);
        crc2.arc(500, 380, 10, 0, Math.PI * 2., true);
        crc2.stroke();
        crc2.fillStyle = "#eba96b";
        crc2.fill();
        crc2.closePath();
        // Lächeln
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.arc(500, 380, 5, 0, Math.PI, false);
        crc2.stroke();
        crc2.closePath();
        //Augen
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.arc(495, 375, 2, 0, Math.PI * 2, true); // linkes Auge
        crc2.fill();
        crc2.arc(505, 375, 2, 0, Math.PI * 2, true); // rechtes Auge
        crc2.fill();
        crc2.closePath();
    }
    drawMensch2();
    //Fußgänger 1
    function drawFußgaenger1() {
        //Kopf
        crc2.beginPath();
        crc2.moveTo(350, 500);
        crc2.arc(350, 500, 10, 0, Math.PI * 2., true);
        crc2.fillStyle = "#eb974a";
        crc2.fill();
        crc2.closePath();
        //Körper
        crc2.beginPath();
        crc2.moveTo(350, 500);
        crc2.lineTo(350, 550);
        crc2.strokeStyle = "#eb974a";
        crc2.stroke();
        crc2.closePath();
        // Lächeln
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.arc(350, 500, 5, 0, Math.PI, false);
        crc2.stroke();
        crc2.closePath();
        //Augen
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.arc(345, 495, 2, 0, Math.PI * 2, true); // linkes Auge
        crc2.fill();
        crc2.arc(355, 495, 2, 0, Math.PI * 2, true); // rechtes Auge
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        // Arme
        crc2.beginPath();
        crc2.strokeStyle = "#eb974a";
        crc2.moveTo(350, 510);
        crc2.lineTo(340, 540);
        crc2.moveTo(350, 510);
        crc2.lineTo(360, 540);
        crc2.stroke();
        crc2.closePath();
    }
    drawFußgaenger1();
    //Fußgänger 2
    function drawFußgaenger2() {
        //Kopf
        crc2.beginPath();
        crc2.moveTo(750, 500);
        crc2.arc(750, 500, 10, 0, Math.PI * 2., true);
        crc2.stroke();
        crc2.fillStyle = "#eb974a";
        crc2.fill();
        crc2.closePath();
        //Körper
        crc2.beginPath();
        crc2.moveTo(750, 500);
        crc2.lineTo(750, 550);
        crc2.strokeStyle = "#eb974a";
        crc2.stroke();
        crc2.closePath();
        // Lächeln
        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.arc(750, 500, 5, 0, Math.PI, false);
        crc2.stroke();
        crc2.closePath();
        // Augen
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.arc(745, 495, 2, 0, Math.PI * 2, true); // linkes Auge
        crc2.fill();
        crc2.arc(755, 495, 2, 0, Math.PI * 2, true); // rechtes Auge
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        //Arme
        crc2.beginPath();
        crc2.strokeStyle = "#eb974a";
        crc2.moveTo(750, 510);
        crc2.lineTo(740, 540);
        crc2.moveTo(750, 510);
        crc2.lineTo(760, 540);
        crc2.stroke();
    }
    drawFußgaenger2();
    function drawPalme1() {
        //Stamm
        crc2.beginPath();
        //crc2.moveTo(150, 400);
        crc2.fillStyle = "#753e0b";
        crc2.fillRect(123, 400, 15, 150);
        crc2.closePath();
        //Blätter
        crc2.beginPath();
        crc2.moveTo(123, 400);
        crc2.quadraticCurveTo(123, 375, 183, 400);
        crc2.moveTo(123, 400);
        crc2.quadraticCurveTo(173, 375, 243, 400);
        crc2.moveTo(173, 400);
        crc2.quadraticCurveTo(173, 385, 243, 400);
        crc2.moveTo(123, 400);
        crc2.quadraticCurveTo(123, 385, 183, 400);
        crc2.strokeStyle = "green";
        crc2.fillStyle = "green";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
    }
    drawPalme1();
})(AufgabeCanvas || (AufgabeCanvas = {}));
//# sourceMappingURL=script.js.map