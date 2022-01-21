"use strict";

const firstDiv = document.querySelectorAll('div')[0];
const secondDiv = document.querySelectorAll('div')[1];
const thirdDiv = document.querySelectorAll('div')[2];

function lightUpAndDown(firstEl, secondEl, thirdEl) {
  firstEl.addEventListener("mouseover", ()=> {
    secondEl.style.filter = "brightness(60%)";
    thirdEl.style.filter = "brightness(60%)";
  });
  
  firstEl.addEventListener("mouseout", ()=> {
    secondEl.style.filter = "brightness(100%)";
    thirdEl.style.filter = "brightness(100%)";
  });
};

lightUpAndDown(firstDiv, secondDiv, thirdDiv);

lightUpAndDown(secondDiv, firstDiv, thirdDiv);

lightUpAndDown(thirdDiv, secondDiv, firstDiv);