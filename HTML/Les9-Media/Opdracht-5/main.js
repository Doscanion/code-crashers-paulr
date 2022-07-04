var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//Red
ctx.fillStyle = 'hsl(0, 100%, 75%)';
ctx.fillRect(0, 0, 150, 150);
ctx.fillStyle = 'hsl(0, 100%, 50%)';
ctx.fillRect(150, 0, 150, 150);
ctx.fillStyle = 'hsl(0, 100%, 20%)';
ctx.fillRect(300, 0, 150, 150);
//Green
ctx.fillStyle = 'hsl(120, 100%, 75%)';
ctx.fillRect(0, 150, 150, 150);
ctx.fillStyle = 'hsl(120, 100%, 50%)';
ctx.fillRect(150, 150, 150, 150);
ctx.fillStyle = 'hsl(120, 100%, 20%)';
ctx.fillRect(300, 150, 150, 150);
//Blue
ctx.fillStyle = 'hsl(240, 100%, 75%)';
ctx.fillRect(0, 300, 150, 150);
ctx.fillStyle = 'hsl(240, 100%, 50%)';
ctx.fillRect(150, 300, 150, 150);
ctx.fillStyle = 'hsl(240, 100%, 20%)';
ctx.fillRect(300, 300, 150, 150);
