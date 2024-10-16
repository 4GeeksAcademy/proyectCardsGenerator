/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suit = ["♦", "♥", "♠", "♣"];
  let num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let rdmNum = Math.floor(Math.random() * num.length);
  document.querySelector("#icon").innerHTML = num[rdmNum];

  let rdmSuit = Math.floor(Math.random() * suit.length);
  document.querySelector("#suitOne").innerHTML = suit[rdmSuit];
  document.querySelector("#suitTwo").innerHTML = suit[rdmSuit];

  document.getElementById("genCard").addEventListener("click", window.onload);
};
