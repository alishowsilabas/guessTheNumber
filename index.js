let genNumber
let attemptsQtd = []
let userNumbers = []
let maxGuesses = 10

function newGame() {
    window.location.reload()
}

function initRandom() {
    genNumber = Math.floor(Math.random() * 100 + 1);
    // console.log(genNumber);
}

function validateOnEnter(event) {
    if (event.key === "Enter") {
        var input = document.getElementById('inputBox');
        var value = Number(input.value);

        if (isNaN(value) || value < Number(input.min) || value > Number(input.max)) {
            alert('Por favor, insira um número entre ' + input.min + ' e ' + input.max);
            event.preventDefault(); // Impede o envio do formulário
        }
    }
}

function numbersCompare() {
    const userNumber = Number(document.getElementById('inputBox').value);
    userNumbers.push(' ' + userNumber);
    document.getElementById('guesses').innerHTML = userNumbers

    const attempts = Number(document.getElementById('inputBox').value);
    attemptsQtd.push(attempts);
    document.getElementById('attempts').innerHTML = attemptsQtd.length

    if (attemptsQtd.length < maxGuesses) {
        if (userNumber > genNumber) {
            document.getElementById('textOutput').style.color = "#FFFF99";
            document.getElementById('textOutput').innerHTML = 'Seu palpite é alto'
            document.getElementById('inputBox').value = ''
        } else if (userNumber < genNumber) {
            document.getElementById('textOutput').style.color = "#99CCFF";
            document.getElementById('textOutput').innerHTML = 'Seu palpite é baixo'
            document.getElementById('inputBox').value = ''
        } else {
            document.getElementById('textOutput').style.color = "#66FF99";
            document.getElementById('textOutput').innerHTML = 'Parabéns, você acertou! &#128513;'
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }
    } else {
        document.getElementById('textOutput').style.color = "#FF6633";
        document.getElementById('textOutput').innerHTML = 'Você perdeu! &#128517; o Número Mágico era: ' + genNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
}

document.getElementById('harryAudio').volume = 0.05