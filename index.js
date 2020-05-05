var img1 = document.querySelector('#img1');
var img2 = document.querySelector('#img2');
var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var doubleBtn = document.querySelector('#doubleBtn');
function randNum() {
  return Math.floor(Math.random() * 6) + 1;
}
function rollDice1() {
  var image = "images/dice" + randNum() + ".png";
  img1.setAttribute('src', image);
}
function rollDice2() {
  var image = "images/dice" + randNum() + ".png";
  img2.setAttribute('src', image);
}
rollDice1();
rollDice2();
btn1.setAttribute('onclick', 'rollDice1()');
btn2.setAttribute('onclick', 'rollDice2()');
doubleBtn.setAttribute('onclick', 'rollDice1();rollDice2();');
