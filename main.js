/** @type {HTMLCanvasElement} */

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var img1 = new Image();
img1.src = 'cactus.png';

var img2 = new Image();
img2.src = 'dino.png';

var dino = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw() {
        ctx.fillStyle = 'green';
        ctx.drawImage(img2, this.x, this.y);
    }
}

class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.drawImage(img1, this.x, this.y);
    }
}

var timer = 0;
var cactusList = [];
var jumpTimer = 0;
function framePlay() {
    animation = requestAnimationFrame(framePlay);
    timer++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (timer % 240 === 0) {
        var cactus = new Cactus();
        cactusList.push(cactus);
    }
    if (jump == true) {
        dino.y -= 2;
        jumpTimer += 2;
    }
    if (jump == false) {
        if (dino.y < 200) {
            dino.y += 2;
        }
    }
    if (jumpTimer > 150) {
        jump = false;
        jumpTimer = 0;
    }

    cactusList.forEach((a, i, o) => {
        if (a.x < 0) {
            o.splice(i, 1);
        }
        a.x--;
        crash(dino, a);
        a.draw();
    })
    dino.draw();
}
framePlay();

function crash(dino, cactus) {
    var xDiff = cactus.x - (dino.x + dino.width);
    var yDiff = cactus.y - (dino.y + dino.height);
    if (xDiff < 0 && yDiff < 0) {
        cancelAnimationFrame(animation);
        document.getElementById('audio').pause();
        alert('Game Over!!!');
    }
}

var jump = false;
document.addEventListener('keydown', function (e) {
    if (dino.y < 200) {
        return;
    }
    if (e.code === 'Space') {
        jump = true;
    }
})