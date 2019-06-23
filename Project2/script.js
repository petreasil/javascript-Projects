//array of colors

const hexNumbers = [0, 1, 2, 3, 4, 5, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//select elements
const hexBtn = document.querySelector(".hexBtn");
const bodyBkg = document.querySelector("body");
const hex = document.querySelector(".hex");
//event listner
hexBtn.addEventListener("click", getHex);

function getHex() {
  let hexcolor = "#";

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumbers.length);
    hexcolor += hexNumbers[random];
    //console.log(hexcolor);
  }
  bodyBkg.style.backgroundColor = hexcolor;
  hex.innerHTML = hexcolor;
}
