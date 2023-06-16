let num = document.querySelector(".number");
let back = document.querySelector(".back");
let next = document.querySelector(".next");
let reset = document.querySelector(".reset");
let plus10 = document.querySelector(".firstp");
let plus50 = document.querySelector(".secondp");
let plus100 = document.querySelector(".thirdp");
let number = 0;
let localNum = localStorage.getItem("newNumber");
number = localNum;
num.textContent = localNum;
function toLocalstorage() {
  localStorage.setItem("newNumber", String(number));
}
function nextNum() {
  number++;
  num.textContent = number;
  toLocalstorage();
}
function backNum() {
  number--;
  num.textContent = number;
  toLocalstorage();
}
function resetNum() {
  num.textContent = 0;
  number = 0;
  localStorage.clear();
}

function pllus10() {
  number += 10;
  num.textContent = Number(number);
  toLocalstorage();
}
function pllus50() {
  number += 50;
  num.textContent = Number(number);
  toLocalstorage();
}
function pllus100() {
  number += 100;
  num.textContent = Number(number);
  toLocalstorage();
}
plus10.addEventListener("click", pllus10);
plus50.addEventListener("click", pllus50);
plus100.addEventListener("click", pllus100);
back.addEventListener("click", backNum);
next.addEventListener("click", nextNum);
reset.addEventListener("click", resetNum);
