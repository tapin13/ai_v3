$( document ).ready(function() {
    square();
    startGame();
    
    document.onkeydown = function(e) {
        if(hero.x == enemy.x && hero.y == enemy.y) { // game over
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

function startGame() {
    $("#gameover").hide();

    hero.x = getRand(19);
    hero.y = getRand(19);
    hero.draw();

    enemy.x = getRand(19);
    enemy.y = getRand(19);
    enemy.draw();

    var searchNdestroyInterval = setInterval(function() {
        if(enemy.searchNdestroy()) {
            enemy.draw();
        } else {
            clearInterval(searchNdestroyInterval);
            $("#gameover").show();
        }
    }, 1000);
}