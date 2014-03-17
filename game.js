/**
 * Created by Korvin on 17.03.14.
 */

var gamefield = document.getElementById('game_field');


function Snake(){
    this.blocks = {};
    this.length = this.blocks.length;
    this.GenerateStartBlocks = function() {
        var x = getRandomInt(gamefield.left)
    }
}


function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





function init(){
    //generate snake start blocks
    var snake = new Snake();




}


init()