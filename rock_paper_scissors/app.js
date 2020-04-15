console.log('test');
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function getComputerChoise(){
  const choises = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() *3);
  return choises[randomNumber];

}

function convertToWord(letter){
  switch(letter){
    case 'r':
      return "Rock";
    case 'p':
      return "Paper";
    default:
      return "Scissors";
  }
}

function win(userChoise, computerChoise){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoise)}(user) beats ${convertToWord(computerChoise)}(comp). You win`;
    document.getElementById(userChoise).classList.add('green-glow');
    setTimeout(function(){
      document.getElementById(userChoise).classList.remove('green-glow');
    }, 350);
}

function lose(userChoise, computerChoise){
   compScore++;
   userScore_span.innerHTML = userScore;
   compScore_span.innerHTML = compScore;
   result_p.innerHTML = `${convertToWord(userChoise)}(user) loses to ${convertToWord(computerChoise)}(comp). You lose`;
   document.getElementById(userChoise).classList.add('red-glow');
   setTimeout(function(){
     document.getElementById(userChoise).classList.remove('red-glow');
   }, 350);

}

function draw(userChoise, computerChoise){
    result_p.innerHTML = "its a draw!";
    document.getElementById(userChoise).classList.add('gray-glow');
    setTimeout(function(){
      document.getElementById(userChoise).classList.remove('gray-glow');
    }, 350);


}


function game(userChoise){
  const computerChoise = getComputerChoise();
  switch(userChoise + computerChoise){
    case 'rs':
      win(userChoise, computerChoise);
      break;
    case 'sp':
      win(userChoise, computerChoise);
      break;
    case 'pr':
        win(userChoise, computerChoise);
        break;
    case 'rp':
      lose(userChoise, computerChoise);
      break;
    case 'ps':
      lose(userChoise, computerChoise);
      break;
    case 'sr':
        lose(userChoise, computerChoise);
        break;
    default:
      draw(userChoise, computerChoise);
      break;
  }

}

function main(){
  rock_div.addEventListener ('click', function(){
    game('r');
  });

  paper_div.addEventListener ('click', function(){
    game('p');
  });

  scissors_div.addEventListener ('click', function(){
    game('s');
  });


}

main();
