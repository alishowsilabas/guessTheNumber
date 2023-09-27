let genNumber
let attemptsQtd = []
let userNumbers = []

function initRandom() {
    genNumber = Math.floor(Math.random() * 100 + 1);
    console.log(genNumber);
}

function numbersCompare() {
    const userNumber = Number(document.getElementById('inputBox').value);
    userNumbers.push(' ' + userNumber);
    document.getElementById('guesses').innerHTML = userNumbers
    
    const attempts = Number(document.getElementById('inputBox').value);
    attemptsQtd.push(attempts);
    document.getElementById('attempts').innerHTML = attemptsQtd.length

    if (userNumber > genNumber) {
        document.getElementById('textOutput').innerHTML = 'Seu palpite é muito alto'
    } else if (userNumber < genNumber){
        document.getElementById('textOutput').innerHTML = 'Seu palpite é muito baixo'
    } else { 
        document.getElementById('textOutput').innerHTML = 'Parabéns, você acertou!'
    }
}

document.getElementById('harryAudio').volume = 0.2