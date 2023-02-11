const canvas = document.querySelector('#triforce').getContext('2d');
canvas.beginPath();
canvas.lineWidth = 10;
const gradientLine = canvas.createLinearGradient(220, 200, 410, 370);
gradientLine.addColorStop(0.9, '#b08205');
gradientLine.addColorStop(0.5, '#FFCC00');
canvas.strokeStyle = gradientLine;
canvas.moveTo(400, 100);
canvas.lineTo(300, 300);
canvas.lineTo(500, 300);
canvas.closePath();
// #FFCC00
// const gradient = canvas.createRadialGradient(410, 175, 0, 415, 315, 400);
const gradient = canvas.createRadialGradient(410, 175, 0, 410, 185, 90);
gradient.addColorStop(1, 'yellow');
gradient.addColorStop(0.01, 'white');

canvas.fillStyle = gradient;
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.lineWidth = 10;
const gradientLineLeft = canvas.createLinearGradient(100, 400, 300, 570);
gradientLineLeft.addColorStop(0.9, '#b08205');
gradientLineLeft.addColorStop(0.5, '#FFCC00');
canvas.strokeStyle = gradientLineLeft;
canvas.moveTo(292, 315);
canvas.lineTo(192, 515);
canvas.lineTo(392, 515);
canvas.closePath();
const gradientLeft = canvas.createRadialGradient(282, 455, 0, 292, 455, 90);
gradientLeft.addColorStop(1, 'yellow');
gradientLeft.addColorStop(0.01, 'white');

canvas.fillStyle = gradientLeft;
canvas.fill();
canvas.stroke();
canvas.beginPath();
canvas.lineWidth = 10;
const gradientLineRight = canvas.createLinearGradient(300, 400, 500, 570);
gradientLineRight.addColorStop(0.9, '#b08205');
gradientLineRight.addColorStop(0.5, '#FFCC00');
canvas.strokeStyle = gradientLineRight;
canvas.moveTo(508, 315);
canvas.lineTo(408, 515);
canvas.lineTo(608, 515);
canvas.closePath();
const gradientRight = canvas.createRadialGradient(502, 405, 0, 502, 375, 90);
gradientRight.addColorStop(1, 'yellow');
gradientRight.addColorStop(0.01, 'white');

canvas.fillStyle = gradientRight;
canvas.fill();
canvas.stroke();
