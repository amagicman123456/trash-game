import {winScreen} from './package.js';
var body = document.body;
var block = document.querySelectorAll('.block');
var game = document.querySelector('#game');
var winStatus = new Promise(function(resolve){
    setInterval(function(){
        if(game.childElementCount==0){
            resolve();
        }
    }, 100)
})

winStatus
    .then(()=>{
        document.write(winScreen);
    })
    .catch((err)=>{
        throw new Error(err);
    })
for(let i=0;i<block.length;i++){
    block[i].addEventListener('animationiteration', ()=>{
        var random = Math.floor(Math.random() * 5);
        var left = random * 100;
        block[i].style.left = left + "px";
    });
    function e(){this.addEventListener('click', ()=>{
        game.removeChild(block[i]);
    })};
    e.call(block[i]);
}