let attempts 
let guesses
let number
let playing = true

function init() {
    number = Math.floor(Math.random() * 100) + 1
    attempts = 0
    guesses = []
    console.log(number)
}

function check() {
    if(playing){
        let attempt = Number(document.getElementById('inputBox').value)
        if (attempt >100) {
            document.getElementById('textOutput').innerHTML = 'Please type a number beetwen 0-100!'
            document.getElementById('inputBox').value = ''   
        }

        else if (attempt > Number(number)) {
            document.getElementById('textOutput').innerHTML = 'Too High!'
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            guesses.push(' ' + attempt)
            document.getElementById('guesses').innerHTML = guesses
            document.getElementById('inputBox').value = ''  
        } else if (attempt < number) {
            document.getElementById('textOutput').innerHTML = 'Too Low!'
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            guesses.push(' ' + attempt)
            document.getElementById('guesses').innerHTML = guesses
            document.getElementById('inputBox').value = ''  
        }
        else{
            document.getElementById('textOutput').innerHTML = 'Congratulations! You got it right!'
            document.getElementById('inputBox').disabled = true
            playing = false
        }
    }
}

function newGame(){
    window.location.reload()
}