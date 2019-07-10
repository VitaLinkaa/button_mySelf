let play = document.querySelector("#btn_play");
let hidden = document.querySelector("#btn_hidden");
let block = document.querySelector(".block");
let x = document.querySelector(".block_x");

play.onclick = playBlock;
hidden.onclick = hiddenBlock;
x.onclick = hiddenBlock;

function playBlock() {
    window.setTimeout(function(){
      block.style.display = "block";
    },200);
}

function hiddenBlock() {
setTimeout(function(){
      block.style.display = 'none';
    },200);
}
