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
    function drawBoat() {
        //Boot
        crc2.beginPath();
        crc2.moveTo(75, 269.5);
        crc2.lineTo(105, 269.5);
        crc2.lineTo(105, 300);
        crc2.lineTo(75, 269.5);
        crc2.strokeStyle = "#7c6c48";
        crc2.stroke();
        crc2.fillStyle = "#7c6c48";
        crc2.fill();
        crc2.fillRect(105, 268.5, 50, 34);
        crc2.moveTo(155, 269.5);
        crc2.lineTo(185, 269.5);
        crc2.lineTo(155, 300);
        crc2.lineTo(155, 269.5);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        //Segel Rechts
        crc2.beginPath();
        crc2.moveTo(120, 270);
        crc2.fillRect(120, 270, 5, -55);
        crc2.moveTo(125, 220);
        crc2.lineTo(150, 250);
        crc2.lineTo(125, 250);
        crc2.lineTo(125, 220);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();
        //Segel Links
        crc2.beginPath();
        crc2.moveTo(120, 230);
        crc2.lineTo(120, 250);
        crc2.lineTo(100, 250);
        crc2.lineTo(120, 230);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();
    }
    drawBoat();
    function drawPalm() {
        // Palme 1 zeichnen
        //Palme Stamm
        crc2.beginPath();
        crc2.moveTo(10, 590);
        crc2.strokeStyle = "#bf8d21";
        crc2.fillStyle = "#bf8d21";
        crc2.fillRect(40, 600, 10, -150);
        crc2.fill();
        crc2.closePath();
        //Palmenblätter
        //Palmenblatt 1
        crc2.beginPath();
        crc2.moveTo(45, 455);
        crc2.strokeStyle = "green";
        crc2.fillStyle = "green";
        crc2.quadraticCurveTo(10, 400, 5, 500);
        crc2.moveTo(5, 500);
        crc2.quadraticCurveTo(10, 430, 45, 455);
        //Palmenblatt 2
        crc2.moveTo(45, 455);
        crc2.quadraticCurveTo(80, 400, 85, 500);
        crc2.moveTo(85, 500);
        crc2.quadraticCurveTo(80, 430, 45, 455);
        //Palmenblatt 3
        crc2.moveTo(45, 455);
        crc2.quadraticCurveTo(10, 370, 5, 445);
        crc2.moveTo(5, 445);
        crc2.quadraticCurveTo(10, 400, 45, 455);
        //Palmenblatt 4
        crc2.moveTo(45, 455);
        crc2.quadraticCurveTo(80, 370, 85, 445);
        crc2.moveTo(85, 445);
        crc2.quadraticCurveTo(80, 400, 45, 455);
        //Palmenblatt 5
        crc2.moveTo(45, 455);
        crc2.quadraticCurveTo(50, 400, 10, 390);
        crc2.moveTo(10, 390);
        crc2.quadraticCurveTo(50, 440, 45, 455);
        //Palmenblatt 6
        crc2.moveTo(46, 455);
        crc2.quadraticCurveTo(47, 350, 95, 400);
        crc2.moveTo(95, 400);
        crc2.quadraticCurveTo(47, 390, 46, 455);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        //Palme 2 zeichnen
        //Palme Stamm
        crc2.beginPath();
        crc2.moveTo(950, 600);
        crc2.strokeStyle = "#bf8d21";
        crc2.fillStyle = "#bf8d21";
        crc2.fillRect(950, 600, 10, -150);
        crc2.fill();
        crc2.closePath();
        //Palmenblatt 1
        crc2.beginPath();
        crc2.moveTo(955, 455);
        crc2.strokeStyle = "green";
        crc2.fillStyle = "green";
        crc2.quadraticCurveTo(990, 400, 995, 500);
        crc2.moveTo(995, 500);
        crc2.quadraticCurveTo(990, 430, 955, 455);
        //Palmenblatt 2
        crc2.moveTo(955, 455);
        crc2.quadraticCurveTo(920, 400, 915, 500);
        crc2.moveTo(915, 500);
        crc2.quadraticCurveTo(920, 430, 955, 455);
        //Palmenblatt 3
        crc2.moveTo(955, 455);
        crc2.quadraticCurveTo(990, 370, 995, 445);
        crc2.moveTo(995, 445);
        crc2.quadraticCurveTo(990, 400, 955, 455);
        //Palmenblatt 4
        crc2.moveTo(955, 455);
        crc2.quadraticCurveTo(920, 370, 915, 445);
        crc2.moveTo(915, 445);
        crc2.quadraticCurveTo(920, 400, 955, 455);
        //Palmenblatt 5
        crc2.moveTo(955, 455);
        crc2.quadraticCurveTo(950, 400, 990, 390);
        crc2.moveTo(990, 390);
        crc2.quadraticCurveTo(950, 440, 955, 455);
        //Palmenblatt 6
        crc2.moveTo(954, 455);
        crc2.quadraticCurveTo(953, 350, 905, 400);
        crc2.moveTo(905, 400);
        crc2.quadraticCurveTo(953, 390, 954, 455);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
    }
    drawPalm();
})(AufgabeCanvas || (AufgabeCanvas = {}));
//# sourceMappingURL=script.js.map