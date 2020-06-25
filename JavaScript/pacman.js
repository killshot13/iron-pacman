/*var map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,],
    [1,2,2,2,2,2,1,2,2,2,2,2,1,],
    [1,2,1,1,1,2,1,2,1,1,1,2,1,],
    [1,2,1,2,2,2,2,2,2,2,1,2,1,],
    [1,2,2,2,1,1,5,1,1,2,2,2,1,],
    [1,2,1,2,2,2,2,2,2,2,1,2,1,],
    [1,2,1,1,1,2,1,2,1,1,1,2,1,],
    [1,2,2,2,2,2,1,2,2,2,2,2,1,],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,],
]
var pacman = {
    x: 6,
    y: 4
}

function drawWorld() {
    for(var y = 0; y < map.length; y++){
        for(var x = 0; x < map.length; x++){
            if (map[y][x] === 1) {
                document.getElementById('world').innerHTML += "<div class='wall'></div>";
            }
            else if (map[y][x] === 2) {
                document.getElementById('world').innerHTML += "<div class='coin'></div>";
            }
            else if (map[y][x] === 3) {
                document.getElementById('world').innerHTML += "<div class='ground'></div>";
            }
            else if (map[y][x] === 5) {
                document.getElementById('world').innerHTML += "<div class='pacman'></div>";
            }

        }
        docment.getElementById('world').innerHTML += "<br>";
    }
}

document.onkeydown = function(e){
    if (e.keyCode === 37) {
        map[pacman.y][pacman.x] = 3;
        pacman.y = pacman.y - 1;
        map[pacman.y][pacman.x] = 5;
    }
    else if (e.keyCode === 38) {
        if (map[pacman.y - 1][pacman.x] !== 1)
            map[pacman.y][pacman.x] = 3;
        pacman.y = pacman.y - 1;
        map[pacman.y][pacman.x] = 5;
    }
    else if (e.keyCode === 39) {
        map[pacman.y][pacman.x] = 3;
        pacman.y = pacman.y + 1;
        map[pacman.y][pacman.x] = 5;
    }
    else if (e.keyCode === 40) {
        if (map[pacman.y + 1][pacman.x] !== 1)
            map[pacman.y][pacman.x] = 3;
        pacman.y = pacman.y - 1;
        map[pacman.y][pacman.x] = 5;
    }
}
drawWorld();


