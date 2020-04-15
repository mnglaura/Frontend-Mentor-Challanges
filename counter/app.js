let score1 = 0;
let score2 = 0;
let scorePlayer1 = document.querySelector('.score1');
let scorePlayer2 = document.querySelector('.score2');
let incScore1= document.querySelector('#inc1');
let incScore2= document.querySelector('#inc2');
let result = document.querySelector('.result');
let reset = document.querySelector('.reset');


incScore1.addEventListener('click', function() {
  if(score1 < 5){
    score1++;
    scorePlayer1.innerHTML = score1;

    if(score1 == 5){
      win(1);
  }}
});

incScore2.addEventListener('click', function() {
  if(score2 < 5){
    score2++;
  scorePlayer2.innerHTML = score2;

  if(score2 == 5){
    win(2);
  }}
});

function win(player){
  switch(player){
    case 1:
      result.innerHTML = 'player 1 won!';
      break;
    case 2:
      result.innerHTML = 'player 2 won!';

      break;
    default:
      break;
  }

}

reset.addEventListener('click', function(){
  score1 = 0;
  score2 = 0;
  scorePlayer1.innerHTML = score1;
  scorePlayer2.innerHTML = score2;
  result.innerHTML= '';
});
