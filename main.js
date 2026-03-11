/* *****************************************
 * *******************************************
 * Timothy Adeyinka
 * Notification Page
 * 28th February, 2026
 * ******************************************
 *  main.js
 * timothyadeyinka.vercel.app
 * *******************************************
 * *******************************************/

"use strict";

const toggle = document.querySelector(".toggle");
const num = document.querySelector(".blue");

// refactoring the below function helps to achieve DRY;
const countNewMessages = () => {
  const active = document.querySelectorAll("div.active");
  num.textContent = active.length;
};

countNewMessages();

// loop through the node list to toggle target's class
toggle.addEventListener("click", () => {
  const unread = document.querySelectorAll("div.unread");
  const dots = document.querySelectorAll("span.dot");
  dots.forEach((dot) => {
    dot.classList.toggle("hidden");
  });
  unread.forEach((el) => {
    el.classList.toggle("active");
  });

  // update number of messages;
  countNewMessages();
});
