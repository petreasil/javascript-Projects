const colorBtn = document.querySelector(".btn");
const bodyBcg = document.querySelector("body");

const colors = ["red", "yellow", "red", "green", "blue", "#3b5998"];
//event listener btn
colorBtn.addEventListener("click", changeColor);

function changeColor() {
  //bodyBcg.style.backgroundColor = Math.floor(Math.random() * colors.length);

  let random = Math.floor(Math.random() * colors.length);
  bodyBcg.style.backgroundColor = colors[random];
}
