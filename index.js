let genNumber
let userNumbers = []

function initRandom() {
    genNumber = Math.floor(Math.random() * 100 + 1);
}

function numbersCompare() {
    const userNumber = Number(document.getElementById('inputBox').value);
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    if (userNumber > genNumber) {
        document.getElementById('resultWarning').innerHTML = 'Seu número é mais alto'
    } else if (userNumber < genNumber){
document.getElementById('resultWarning').innerHTML = 'Seu número é mais baixo'
    } else { 

    }
}

document.getElementById('harryAudio').volume = 0.2