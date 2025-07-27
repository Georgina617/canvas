//BUILD A HOUSE USING HTML CANVAS
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 200;

ctx.fillStyle = '#3b200cff';
ctx.fillRect(100, 100, 200, 100);

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 30);
ctx.lineTo(300,100);
ctx.closePath();
ctx.fillStyle = '#A52A2A';
ctx.fill();

ctx.fillStyle = '#654321';
ctx.fillRect(180, 130, 40, 70);

ctx.fillStyle = '#ADD8E6';
ctx.fillRect(120, 120, 40, 40);
ctx.fillRect(240, 120, 40, 40);

ctx.lineWidth = 2;
ctx.strokeStyle = '#000000';
ctx.strokeRect(180, 130, 40, 70);
ctx.strokeRect(120, 120, 40, 40);
ctx.strokeRect(240, 120, 40, 40);



