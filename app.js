let level = 0;
let start = false; //game has not been started

let gameSeq = [];
let userSeq = [];

let score=0;

let btns = ["yellow" , "red" , "purple" , "green"];

document.addEventListener("keypress" , function(){  //Document means press key the game will start
    if(start == false){
        console.log("game has started.");
        start= true; //game has been started.

        levelUp();
    }
} );

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    } , 500);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    } , 200);
}

function check(idx){
 if(userSeq[idx] == gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
        setTimeout(levelUp , 1000);  //as the user entered all value correct so upgrade level
    }
 }
 else{
    let h2 = document.querySelector("h2");
    if(score<=level){
        score= level;
    }
    h2.innerHTML = `Game Over! Your score is <b>${level}</b> <br> Higesht score is ${score} <br>Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    } , 150 );
    reset();

 }
}
function btnpressed(){
   let btn = this;
   userflash(btn);
   getcolor = btn.getAttribute("id");
   userSeq.push(getcolor);

   check(userSeq.length - 1);
}

let allbtns= document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click" , btnpressed);
}

function levelUp(){

    userSeq=[]; //as level start the user value i become empty and start as new
    level++;
    let h2= document.querySelector("h2");
    h2.innerText = `Level ${level}`;
    
    let randomidx = Math.floor( Math.random() * 3);
    let randclr = btns[randomidx];
    let randbtn = document.querySelector(`.${randclr}`);
    gameSeq.push(randclr);
    console.log(randclr);
    btnflash(randbtn);

}

function reset(){
start  = false;
gameSeq = [];
userSeq =[];
level = 0;
}