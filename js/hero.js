var Hero = function() {
    this.x = 0;
    this.y = 0;
};

Hero.prototype.draw =  function() {
    $("#square div").removeClass('hero');
    $("#cell_" + this.x + "_" + this.y).addClass('hero');
};
