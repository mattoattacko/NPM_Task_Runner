function displayNumber(e){document.getElementById("placeholder").innerHTML=e}!function(e){"use strict";function t(e){this.sides=e}t.prototype.roll=function(){return Math.floor(Math.random()*this.sides)+1},"undefined"!=typeof module&&module.exports?module.exports=t:e.Dice=t}(this);var dice=new Dice(6),button=document.getElementById("button");button.onclick=function(){displayNumber(dice.roll())};