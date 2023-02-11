const canvas = document.querySelector('#canvas-multi');
canvas.style.backgroundColor = 'khaki';

const canvasCoral = canvas.getContext('2d');
canvasCoral.fillStyle = 'coral';
canvasCoral.fillRect(40, 40, 100, 100);

const canvasSlateblue = canvas.getContext('2d');
canvasSlateblue.fillStyle = 'slateblue';
canvasSlateblue.fillRect(220, 40, 50, 50);
canvasSlateblue.strokeStyle = 'navy';
canvasSlateblue.lineWidth = 5;
canvasSlateblue.strokeRect(220, 40, 50, 50);
//navy

const canvasViolet = canvas.getContext('2d');
canvasViolet.strokeStyle = 'violet';
canvasViolet.lineWidth = 5;
canvasViolet.strokeRect(90, 230, 50, 50);

const canvasDarkseagreen = canvas.getContext('2d');
canvasDarkseagreen.fillStyle = 'darkseagreen';
canvasDarkseagreen.fillRect(220, 230, 80, 80);
canvasDarkseagreen.strokeStyle = 'forestgreen';
canvasDarkseagreen.lineWidth = 20;
canvasDarkseagreen.strokeRect(220, 230, 80, 80);
//forestgreen
