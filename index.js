var img1 = document.querySelector('#img1');
var img2 = document.querySelector('#img2');
var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var doubleBtn = document.querySelector('#doubleBtn');
var player1Score = 0;
var player2Score = 0;
function randNum() {
  return Math.floor(Math.random() * 6) + 1;
}
function rollDice1() {
  player1Score = randNum();
  var image = "images/dice" + player1Score + ".png";
  img1.setAttribute('src', image);
  btn1.setAttribute('disabled', 'disabled');
  btn2.removeAttribute('disabled');
}
function rollDice2() {
  player2Score = randNum();
  var image = "images/dice" + player2Score + ".png";
  img2.setAttribute('src', image);
  btn2.setAttribute('disabled', 'disabled');
  btn1.removeAttribute('disabled');
  var h1 = document.querySelector('h1');
  if ( player1Score === player2Score ) {
    h1.textContent = 'That\'s a tie!';
  }
  else if ( player1Score > player2Score ) {
    h1.textContent = 'Player 1 Wins!';
  }
  else {
    h1.textContent = 'Player 2 Wins!';
  }
};
rollDice1();
rollDice2();
btn1.setAttribute('onclick', 'rollDice1()');
btn2.setAttribute('onclick', 'rollDice2()');
doubleBtn.setAttribute('onclick', 'rollDice1();rollDice2();');
