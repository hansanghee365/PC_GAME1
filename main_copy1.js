/** @type {HTMLCanvasElement} */
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
dino.draw();

class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

var timer = 0;
var cactusList = [];

function framePlay() {
    requestAnimationFrame(framePlay);
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (timer % 60 === 0) {
        var cactus = new Cactus();
        cactusList.push(cactus);
    }

    cactusList.forEach((a) => {
        a.x = a.x - 4;
        a.draw();
    });

    dino.draw();
}
framePlay();

// document.addEventListener('keydown', function (e) {
//     if (e.code == 'ArrowRight') {
//         dino.x += 1;
//         dino.draw();
//     }
// });