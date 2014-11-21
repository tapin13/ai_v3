function square() {
    for(var i = 0; i < 20; i++) {
        for(var j = 0; j < 20; j++) {
            $("#square").append("<div id='cell_" + i + "_" + j + "' class='cell'></div>")
        }
    }
}