let inp=document.querySelectorAll("input")
let result=document.getElementById("result");

let chanceVal=document.getElementById("text");
let highscore=document.getElementById("text2");
var text=100;
let btn2=document.getElementById("btn2");
let image=document.getElementById("question");

let game=document.getElementById("game");

image.innerHTML=inp[0].value;

let randomNumber=parseInt(Math.random()*100)+1;

console.log(randomNumber);

 btn2.addEventListener("click",() => {

    if(randomNumber>parseInt(inp[0].value))
    {
        result.innerHTML="You Are too Low ! 😜";
        chanceVal.innerText=`Chance:${--text}`;
    }
    else if(randomNumber<parseInt(inp[0].value))
    {
        result.innerHTML="You Are too High ! 😜";
        chanceVal.innerText=`Chance:${--text}`;
    }
    else
    {
        result.innerHTML="You Won The Match ! ✌";
        chanceVal.innerText=`Chance:${text}`;
        chanceVal.style.fontSize="40px";
        chanceVal.style.color="green";
        highscore.innerText=`HighScore:${text}`;
        highscore.style.fontSize="40px";
        highscore.style.color="yellow";
        image.innerText=game.value;
    }
 })