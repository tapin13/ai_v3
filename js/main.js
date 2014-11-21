$( document ).ready(function() {
    square();
    startGame();
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