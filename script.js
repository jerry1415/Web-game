function Moveleft(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    if(left>=0){
        character.style.left = left + "px";
    }
}

function Moveright(){
    let right = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    right += 100;
    if(right<300){
        character.style.left = right + "px";
    }
}

document.addEventListener("keydown", event => {
    if(event.key === "ArrowLeft"){Moveleft();}
    if(event.key === "ArrowRight"){Moveright();}

});

var block = document.getElementById('block');
var counter = 0;
block.addEventListener('animationiteration', () => {
  var random = Math.floor(Math.random() * 3);
  left = random * 100;
  block.style.left = left + "px";
  counter ++ ;
});

setInterval(function () {
  var characterleft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
  if (characterleft == blockleft && blockTop<500 && blockTop>300) {
    alert("Game Over. Score: "+counter );
    block.style.animation = "none";
  }
}, 1);


document.getElementById("left").addEventListener('touchstart', Moveleft);
document.getElementById("right").addEventListener('touchstart', Moveright);
