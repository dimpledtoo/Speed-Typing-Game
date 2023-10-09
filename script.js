'use strict mode'


const typedEffect = document.querySelector('.typingdiv');
const typedEffect2 = document.querySelector('.typingdiv2');
const startGame = document.querySelector('.container1 button');
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');




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









