const canvas = document.querySelector('canvas').getContext('2d');
canvas.beginPath();
canvas.lineWidth = 5;
canvas.strokeStyle = '#800000';
canvas.arc(200, 200, 25, 0, 2 * Math.PI);
canvas.fillStyle = 'red';
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.arc(200, 200, 5, 0, 2 * Math.PI);
canvas.fillStyle = '#800000';
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.strokeStyle = '#FFA80A';
canvas.moveTo(175, 25);
canvas.lineTo(100, 25);
canvas.arcTo(25, 25, 25, 75, 75);
canvas.lineTo(25, 175);
canvas.stroke();

canvas.beginPath();
canvas.moveTo(225, 25);
canvas.lineTo(300, 25);
canvas.arcTo(375, 25, 375, 75, 75);
canvas.lineTo(375, 175);
canvas.stroke();

canvas.beginPath();
canvas.moveTo(225, 375);
canvas.lineTo(300, 375);
canvas.arcTo(375, 375, 375, 325, 75);
canvas.lineTo(375, 225);
canvas.stroke();

canvas.beginPath();
canvas.moveTo(175, 375);
canvas.lineTo(100, 375);
canvas.arcTo(25, 375, 25, 325, 75);
canvas.lineTo(25, 225);
canvas.stroke();
