var img1 = document.querySelector('#img1');
var img2 = document.querySelector('#img2');
var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var doubleBtn = document.querySelector('#doubleBtn');
var player1Score = 0;
var player2Score = 0;
var h1 = document.querySelector('#title');
var num = document.querySelector('#num');
function randNum() {
  return Math.floor(Math.random() * 6) + 1;
}
// element.addEventListener("webkitAnimationEnd", callfunction,false);
// element.addEventListener("animationend", callfunction,false);
// element.addEventListener("oanimationend", callfunction,false);
function animate1() {
  h1.innerHTML = 'KCSoftSolutions';
  num.textContent = 'Player 1 played...';
  img1.setAttribute('src', 'images/dice5.png');
  img1.classList.add('rotate');
}
img1.addEventListener('webkitAnimationEnd', rollDice1);
img1.addEventListener('animationend', rollDice1);
img1.addEventListener('oanimationend', rollDice1);

function animate2() {
  num.textContent = 'Getting scores ready...';
  img2.setAttribute('src', 'images/dice5.png');
  img2.classList.add('rotate');
}
img2.addEventListener('webkitAnimationEnd', rollDice2);
img2.addEventListener('animationend', rollDice2);
img2.addEventListener('oanimationend', rollDice2);

function rollDice1() {
  img2.classList.remove('rotate');
  player1Score = randNum();
  var image = "images/dice" + player1Score + ".png";
  img1.setAttribute('src', image);
  btn1.setAttribute('disabled', 'disabled');
  btn2.removeAttribute('disabled');
  h1.innerHTML = 'KCSoftSolutions';
  num.textContent = 'Player 2 it\'s your turn';
}
function rollDice2() {
  img1.classList.remove('rotate');
  // img2.classList.add('rotate');
  player2Score = randNum();
  var image = "images/dice" + player2Score + ".png";
  img2.setAttribute('src', image);
  btn2.setAttribute('disabled', 'disabled');
  btn1.removeAttribute('disabled');
  if ( player1Score === player2Score ) {
    h1.innerHTML = 'That\'s a Draw!';
  }
  else if ( player1Score > player2Score ) {
    h1.innerHTML = '<i class="fas fa-flag-checkered"></i> Player 1 Wins!';
  }
  else {
    h1.innerHTML = 'Player 2 Wins! <i class="fas fa-flag-checkered"></i>';
  }
  num.textContent = 'Player1 = ' + player1Score + ' : Player2 = ' + player2Score;
};
animate1();
animate2();
btn1.setAttribute('onclick', 'animate1()');
btn2.setAttribute('onclick', 'animate2()');

doubleBtn.addEventListener('click', function(){
  document.location.reload();
});
