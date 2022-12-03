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
    const result = getResult(userChoice, oppChoice)
    console.log(result)
    // show result
    // update stats
}

function getResult(userChoice, oppChoice) {
    //rock + rock => draw;
    //rock + paper => lost;
    //rock + scissors => won;

    //paper + rock => won
    //paper + paper => draw;
    //paper + scissors => lost;

    //scissors + rock => lost;
    //scissors + paper => won;
    //scissors + scissors => draw;

    const pair = userChoice + oppChoice

    if ('rockscissors paperrock scissorspaper'.includes(pair)) {
        return 'WON'
    } else if ('rockpaper paperscissors scissorsrock'.includes(pair)) {
        return 'LOST'
    } else {
        return 'DRAW'
    }
}

function selectRandom(...choices) {
    const i = Math.floor(Math.random() * choices.length)
    return choices[i]
}