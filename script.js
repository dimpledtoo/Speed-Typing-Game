'use strict mode'

const typedEffect = document.querySelector('.typingdiv');
const typedEffect2 = document.querySelector('.typingdiv2');
const startGame = document.querySelector('.container1 button');
const letsgo = document.querySelector('.container2 button');
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');
const quoteDisplay = document.querySelector('.container3 .quote');
const quoteInput = document.querySelector('.container3 .quoteInput');
const timerElement = document.querySelector('.container3 .timer');
const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random';




// Landing page text effect
const typedHeading = function () {
    const text = `HOW FAST CAN YOU TYPE?`;

let i = 0;

const interval = setInterval(function () {
    typedEffect.innerHTML += text[i];
    i++;

    if (i === text.length) {
        clearInterval(interval)
    }
}, 100);
}
typedHeading();

// To start the game
startGame.addEventListener('click', function(){
    container1.classList.add('fadeOut');
    container2.classList.remove('fadeOut');
    container2.classList.add('fadeIn');

})

// Instructions page text effect

const typedParagraph = function () {
    const paraText = `Try to type as many quotes as you can before the count down ends. Ready?`;
    let o = 0;

    const intervalTimer = setInterval(function () {
        typedEffect2.innerHTML += paraText[o];
        o++;
         
        if (o === paraText.length) {
            clearInterval(intervalTimer)
        }

    }, 100)
}
typedParagraph();


// Main Game Section

 letsgo.addEventListener('click', function(){
    container2.classList.add('fadeOut');
    container3.classList.remove('fadeOut');
})


// Get Random Quote

function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
      .then(response => response.json())
      .then(data => data.content)
  }

  async function renderNewQuote() {
    const quote = await getRandomQuote()
      quoteDisplay.innerHTML = '';
    quote.split('').forEach(character => {
      const characterSpan = document.createElement('span')
      characterSpan.innerText = character
      quoteDisplay.appendChild(characterSpan)
    })
      quoteInput.value = null

  }


// Making the error work
  
quoteInput.addEventListener('input', () => {
    const arrayQuote = quoteDisplay.querySelectorAll('span')
    const arrayValue = quoteInput.value.split('')
  
    let correct = true
    arrayQuote.forEach((characterSpan, index) => {
      const character = arrayValue[index]
      if (character == null) {
        characterSpan.classList.remove('correct')
        characterSpan.classList.remove('incorrect')
        correct = false
      } else if (character === characterSpan.innerText) {
        characterSpan.classList.add('correct')
        characterSpan.classList.remove('incorrect')
      } else {
        characterSpan.classList.remove('correct')
        characterSpan.classList.add('incorrect')
        correct = false
      }
    })
  
    if (correct) renderNewQuote()
  })

renderNewQuote();