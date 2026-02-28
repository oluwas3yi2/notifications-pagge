const number = document.querySelector(".header .blue");
const unread = document.querySelectorAll(".unread");
const mark = document.getElementsByTagName("a");
let allUnread = true;
function toggle() {
  if (allUnread) {
    for (let i = 0; i < unread.length; i++) {
      unread[i].classList.remove("unread");
      const dot = document.querySelector(".dot");
      if (dot) {
        dot.style.display = "none";
      }
      number.textContent = "0";
    }
  } else {
    for (let i = 0; i < unread.length; i++) {
      unread[i].classList.add("unread");
      const dot = document.querySelector(".dot");
      if (dot) {
        dot.style.display = "block";
      }
      number.textContent = unread.length;
    }
    allUnread = !allUnread;
  }
}

mark.addEventListener("click", (e) => {
  e.preventDefault();
  toggle();
});
