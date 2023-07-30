let randomNumber = parseInt(Math.random() * 100 + 1);

console.log(randomNumber);
let guess = document.getElementById('guess')
let inp = document.querySelectorAll('input');
let btn = document.getElementById('check');
let boxVal = document.getElementsByClassName("box");


let chance = 100;
let chanceVal = document.getElementById('chance')
let scoreVal = document.getElementById('score')

btn.addEventListener('click', () => {
    if (randomNumber > parseInt(inp[0].value)) {
        guess.innerHTML = "Your guess is too low";
        chanceVal.innerText = --chance;
    } else if (randomNumber < parseInt(inp[0].value)) {
        guess.innerHTML = "Your guess is high";
        chanceVal.innerText = --chance;
    } else {
        guess.innerHTML = "🤩🤩Hurray! You won the game🤩🤩";
        chanceVal.innerText = chance;
        scoreVal.innerHTML = chance;
        document.body.style.backgroundColor = `green`;
        boxVal[0].innerHTML = randomNumber;
    }
})

function playAgain() {
    document.location.reload(true);
}
