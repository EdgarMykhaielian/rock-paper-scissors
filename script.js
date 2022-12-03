const buttons = document.querySelectorAll(".button")

for (const button of buttons) {
    button.onclick = handleMove
    // button.onclick = console.log
}

function handleMove(event) {
    // remember user's choice
    const userChoice = event.target.classList[0]
    console.log(userChoice)
    // make random oponent's choice
    const oppChoice = selectRandom('rock', 'paper', 'scissors')
    console.log(oppChoice)
    // select a winner
    // show result
    // update stats
}

function selectRandom(...choices) {
    const i = Math.floor(Math.random() * choices.length)
    return choices[i]
}