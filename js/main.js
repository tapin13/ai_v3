$( document ).ready(function() {
    square();
    startGame();
    
    document.onkeydown = function(e) {
        if(gameover == true) { // game over
            return false;
        }
        
        if(e.keyCode == 37) { // left
            if(hero.y > 0) {
                hero.y--;
            }
        }
        if(e.keyCode == 39) { // right
            if(hero.y < 19) {
                hero.y++;
            }
        }
        if(e.keyCode == 38) { // up
            if(hero.x > 0) {
                hero.x--;
            }
        }
        if(e.keyCode == 40) { // down
            if(hero.x < 19) {
                hero.x++;
            }
        }
        hero.draw();
    };
});

var hero = new Hero();

var enemy = new Enemy();
var enemy2 = new Enemy();

var gameover = false;

function startGame() {
    $("#gameover").hide();
    $("#square div").removeClass('enemy');
    gameover = false;

    hero.x = getRand(19);
    hero.y = getRand(19);
    hero.draw();

    enemy.x = getRand(19);
    enemy.y = getRand(19);
    enemy.draw();

    var searchNdestroyInterval = setInterval(function() {
        enemy.searchNdestroy();
        enemy.draw();
        
        if(hero.x == enemy.x && hero.y == enemy.y) {
            clearInterval(searchNdestroyInterval);
            $("#gameover").show();
            gameover = true;
        }
    }, 1000);
}