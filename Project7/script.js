const btns = document.querySelectorAll(".btn"),
  screen = document.querySelector(".screen"),
  equalBtn = document.querySelector(".btn-equal"),
  clearBtn = document.querySelector(".btn-clear");

//loop

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let number = btns[i].getAttribute("data-num");
    screen.value += number;
    console.log(screen.value);
  });
}

equalBtn.addEventListener("click", function() {
  let value = eval(screen.value);
  screen.value = value;
  console.log(value);
});

clearBtn.addEventListener("click", function() {
  screen.value = "";
});
