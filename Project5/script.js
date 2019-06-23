//select

let counter = document.querySelector(".counter");
const addCount = document.querySelector("#addCountBtn");
const lowerCount = document.querySelector("#lowerCountBtn");

let count = 0;
//event
addCount.addEventListener("click", incermentCount);
lowerCount.addEventListener("click", decreaseCount);

function incermentCount() {
  count++;
  counter.innerHTML = count;
  if (counter.innerHTML > "0") {
    counter.style.color = "blue";
  } else if (counter.innerHTML === "0") {
    counter.style.color = "#fff";
  }
  //animate
  counter.animate([{ opacity: "0.2" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards"
  });
}

function decreaseCount() {
  if (count <= 0) {
    alert("the counter is Zero");
  } else {
    count--;
    counter.innerHTML = count;
  }
  //animate
  counter.animate([{ opacity: "0.2" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards"
  });
}
