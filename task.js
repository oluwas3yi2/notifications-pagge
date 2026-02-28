const number = document.querySelector(".header .blue");
const unread = document.querySelectorAll(".unread");
const btn = document.querySelector(".btn");
let allUnread = true;
//logic for mark as read
function markAsRead() {
  if (!allUnread) return;
  for (let i = 0; i < unread.length; i++) {
    unread[i].classList.remove("active");
    let dot = unread[i].querySelector(".dot");
    if (dot) dot.style.display = "none";
  }
  number.textContent = "0";
  allUnread = false;
}
//logic for mark as unread
function markUnRead() {
  if (allUnread) return;
  for (let i = 0; i < unread.length; i++) {
    unread[i].classList.add("active");
    let dot = unread[i].querySelector(".dot");
    if (dot) dot.style.display = "inline-block";
  }
  number.textContent = unread.length;
  allUnread = true;
}
// toggle between markall and markunread
function toggle() {
  if (allUnread) {
    markAsRead();
  } else {
    markUnRead();
  }
  console.log(allUnread);
}
btn.addEventListener("click", () => {
  toggle();
});
