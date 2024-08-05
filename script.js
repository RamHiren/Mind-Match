let userSeq=[];
let gameSeq=[];
let allBtn = document.querySelectorAll('.btn');
let btns = ['red','yellow','green','purple']

let start = false;
let highscore = 1;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener('keypress',()=>{
   
    if(start==false){
        console.log('game start');
        start = true;
        levelUp();
    }
})
document.addEventListener('touchstart',()=>{
   
    if(start==false){
        console.log('game start');
        start = true;
        levelUp();
    }
})
let level =0;
const levelUp = ()=>{
    userSeq = [];
    level++;
    if(level >= highscore){
        highscore = level;
    }
    console.log(`Level up to ${level}`);
    h2.innerText = `Level: ${level}`;
    
    let randInx = Math.floor(Math.random()*4);
    console.log(randInx);
    let randColor = btns[randInx]
    let randBtn = document.querySelector(`.${randColor}`)
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}


const btnFlash = (btn)=>{
    btn.classList.add('flash')
    setTimeout(()=>{
        btn.classList.remove('flash')
    },250)
}
const userFlash = (btn)=>{
    btn.classList.add('userFlash')
    setTimeout(()=>{
        btn.classList.remove('userFlash')
    },250)
}
const checkAns = (idx)=>{
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over ! Your Score was <b>${level}</b> <br>Press Any to Start Game`;
        h3.innerHTML =`Highest Score =  ${highscore}`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor='white';
        }, 150);
        reset();
    }
}
function btnPress(){
    let btn = this
    // console.log(btn);
    userFlash(btn)
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
for(btn of allBtn){
    btn.addEventListener('click', btnPress)
}

const reset = ()=>{
    start = false;
    userSeq = [];
    gameSeq = [];
    level=0;
    // h2.innerText = `Level: ${level}`;
    
 
}

