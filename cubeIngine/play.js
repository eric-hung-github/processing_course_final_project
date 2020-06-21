// play.html line 109 is original dis
// player.js line 73 receive keyboard control

// try to replace joy stick with mine
// insert code in player.js L70

// comment touchControl.js
// comment mousedown render.js L78

var world;
var player;
var renderer;
var save;
var canvas = document.getElementById("canvas");

setupChangeModeBtn();
startedToPlay();

function startedToPlay() {


    world = new World(3);
    player = new Player(world);
    renderer = new Renderer(canvas, world, player);
    //wsave = new Save(world, player);
}

// change mode button
function setupChangeModeBtn() {
    let programBtn = document.getElementById("intoProgram");
    programBtn.style.position = "absolute";
    programBtn.style.fontSize = 50;
    programBtn.style.width = 100;
    programBtn.style.height = 100;
    programBtn.onclick = function () {
        if (isProgramPage) {
            programPage(false);
            isProgramPage = false;
        } else {
            programPage(true);
            isProgramPage = true;
        }
    }
}

// 

//-----------------------------------my code
blockFuncs = {
    forward: function () {
        //player.position.x++;
        //player.keys['w']=true;
    },
    backward: function () {

    },
    rightward: function () {

    },
    leftward: function () {

    },
    forLoop: function () {

    },
    ifCondi: function () {

    }
}

setInterval(renderer.render.bind(renderer), 20);