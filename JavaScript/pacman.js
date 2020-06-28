let gameData = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,1,2,2,2,2,2,1],
    [1,2,1,2,1,2,1,2,1,2,1,2,1],
    [1,2,1,4,2,2,2,2,2,2,1,2,1],
    [1,2,2,2,1,1,5,1,1,2,2,2,1],
    [1,2,1,2,2,2,2,2,2,2,1,2,1],
    [1,2,1,2,1,2,1,2,1,2,1,2,1],
    [1,2,2,2,2,2,1,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1]
];

const wall = 1;
const coin = 2;
const ground = 3;

let map;

let pacman = {
x: 6,
y: 4,
direction: 'right'
};

let ghost = {
    x: 3,
    y: 3,
    direction: 'right'
    };

function createTiles(data) {
    let tilesArray = [];
    for (let row of data) {
        for (let col of row) {
            let tile = document.createElement('div');
            tile.classList.add('tile');
                if (col == wall) {
                    tile.classList.add('wall');
                } else if (col == coin) {
                    tile.classList.add('coin');
                } else if (col == ground) {
                    tile.classList.add('ground');
                } else if (col == 5) {
                    tile.classList.add('pacman');
                    tile.classList.add(pacman.direction);
                } else if (col == 4) {
                    tile.classList.add('ghost');
                    tile.classList.add(ghost.direction);
            }
            tilesArray.push(tile);
        }
        let brTile = document.createElement('br');
        tilesArray.push(brTile);
    }
    return tilesArray;
}

function drawMap() {
    map = document.createElement('div');
    let tiles = createTiles(gameData);
    for (let tile of tiles) {
        map.appendChild(tile);
    }
    document.body.appendChild(map);
}

function eraseMap() {
    document.body.removeChild(map);
}

function moveDown() {
    pacman.direction = 'down';
    if (gameData[pacman.y+1][pacman.x] == 4) {
        gameOver();
    }
    if (gameData[pacman.y+1][pacman.x] !== wall) {
        gameData[pacman.y][pacman.x] = ground;
        pacman.y = pacman.y + 1 ;
        gameData[pacman.y][pacman.x] = 5;
        return true;
    } else {
        return false;
    }
}

function moveUp() {
    pacman.direction = 'up';
    if (gameData[pacman.y-1][pacman.x] == 4) {
        gameOver();
    }
    if (gameData[pacman.y-1][pacman.x] !== wall) {
        gameData[pacman.y][pacman.x] = ground;
        pacman.y = pacman.y - 1;
        gameData[pacman.y][pacman.x] = 5;
        return true;
    } else {
        return false;
    }
}

function moveLeft() {
    pacman.direction = 'left';
    if (gameData[pacman.y][pacman.x-1] == 4) {
        gameOver();
    }
    if (gameData[pacman.y][pacman.x-1] !== wall) {
        gameData[pacman.y][pacman.x] = ground;
        pacman.x = pacman.x - 1 ;
        gameData[pacman.y][pacman.x] = 5;
        return true;
    } else {
        return false;
    }
}

function moveRight() {
    pacman.direction = 'right';
    if (gameData[pacman.y][pacman.x+1] == 4) {
        gameOver();
    }
    if (gameData[pacman.y][pacman.x+1] !== wall) {
        gameData[pacman.y][pacman.x] = ground;
        pacman.x = pacman.x + 1 ;
        gameData[pacman.y][pacman.x] = 5;
        return true;
    } else {
        return false;
    }
}

function setupKeyboardControls() {
    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 37 || e.keyCode === 65) {        
            moveLeft();
        } else if (e.keyCode === 38 || e.keyCode === 87) {  
            moveUp();
        } else if (e.keyCode === 39 || e.keyCode === 83) {   
            moveRight();
        } else if (e.keyCode === 40 || e.keyCode === 68) {  
            moveDown();
        }
    eraseMap();
    drawMap();
    });
}

function gameOver() {
    alert("Game Over");
}

function startGame() {
    drawMap();
    setupKeyboardControls();
}

startGame();


