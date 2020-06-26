function ghostDown() {
    ghost.direction = 'gdown';
    if (gameData[ghost.y+1][ghost.x] == 5) {
        gameOver();
    }
    if (gameData[ghost.y+1][ghost.x] !== wall) {
        gameData[ghost.y][ghost.x] = coin;
        ghost.y = ghost.y + 1 ;
        gameData[ghost.y][ghost.x] = 4;
        return true;
    } else {
        return false;
    }
}

function ghostUp() {
    ghost.direction = 'gup';
    if (gameData[ghost.y-1][ghost.x] == 5) {
        gameOver();
    }
    if (gameData[ghost.y-1][ghost.x] !== wall) {
        gameData[ghost.y][ghost.x] = coin;
        ghost.y = ghost.y - 1;
        gameData[ghost.y][ghost.x] = 4;
        return true;
    } else {
        return false;
    }
}

function ghostLeft() {
    ghost.direction = 'gleft';
    if (gameData[ghost.y][ghost.x-1] == 5) {
        gameOver();
    }
    if (gameData[ghost.y][ghost.x-1] !== wall) {
        gameData[ghost.y][ghost.x] = coin;
        ghost.x = ghost.x - 1 ;
        gameData[ghost.y][ghost.x] = 4;
        return true;
    } else {
        return false;
    }
}

function ghostRight() {
    ghost.direction = 'ghost';
    if (gameData[ghost.y][ghost.x+1] == 5) {
        gameOver();
    }
    if (gameData[ghost.y][ghost.x+1] !== wall) {
        gameData[ghost.y][ghost.x] = coin;
        ghost.x = ghost.x + 1 ;
        gameData[ghost.y][ghost.x] = 4;
        return true;
    } else {
        return false;
    }
}
let directions = [ghostUp, ghostDown, ghostLeft, ghostRight]
function ghostie(direction) {
    if(direction()) {
        eraseMap();
        drawMap();
        setTimeout(function() {
           ghostie(direction);
        }, 400);
    } else {
        let newDirection = directions[Math.floor(Math.random()*directions.length)]
            ghostie(newDirection);
    }
}

function gameOver() {
    alert("Game Over");
}
ghostie(ghostLeft);