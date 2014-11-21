var Enemy = function() {
    this.x = 19;
    this.y = 19;
};

Enemy.prototype.draw = function() {
    $("#cell_" + this.x + "_" + this.y).addClass('enemy');
};
    
Enemy.prototype.searchNdestroy= function() {
    $("#cell_" + this.x + "_" + this.y).removeClass('enemy');
    if(Math.abs(this.x -hero.x) > Math.abs(this.y -hero.y)) {
        if(this.x > hero.x) {
            this.x--;
            return true;
        }
        if(this.x < hero.x) {
            this.x++;
            return true;
        }
    } else {
        if(this.y > hero.y) {
            this.y--;
            return true;
        }
        if(this.y < hero.y) {
            this.y++;
            return true;
        }
    }
    
    $("#cell_" + this.x + "_" + this.y).addClass('enemy');
    return false;
};