"use strict";

// document.querySelector("body").style.backgroundColor = "blue";

// 1. user will input Number,
// 2.click check to see if they guessed right,
// 3. if right , a message will say "🔥 right numbers",{
//     background Color of the page will trun to green ,
//     the high score with that of the score if its lower than th score ,
//     the question mark will reveal the Number,}
// 4. if no input ( 'no numbers') ;
// 5. if high or low ('too low or too high')
// 6. if the score dropped to 0 when failing, the game will end and said (' you have failed'),
// 7. press again to restart and the game will be reset to default,

const randomNumber = Math.trunc(Math.random() * 20) * 1;

document.querySelector(".guess").value = "0";
