var Enemy = function() {
    this.x = 19;
    this.y = 19;
};

Enemy.prototype.draw = function draw() {
    $("#square div").removeClass('enemy');
    $("#cell_" + this.x + "_" + this.y).addClass('enemy');
};
    
Enemy.prototype.searchNdestroy= function searchNdestroy() {
    if(this.x > hero.x) {
        this.x--;
        return true;
    }
    if(this.y > hero.y) {
        this.y--;
        return true;
    }
    if(this.x < hero.x) {
        this.x++;
        return true;
    }
    if(this.y < hero.y) {
        this.y++;
        return true;
    }
    return false;
}