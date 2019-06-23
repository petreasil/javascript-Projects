const sendBtn = document.querySelector("#sendBtn");
const messageIn = document.querySelector("#messageIn");
const messageOut = document.querySelector("#messageOut");
//event listner

sendBtn.addEventListener("click", sendMsg);

function sendMsg() {
  let message = messageIn.value;
  //console.log(message);
  if (message === "") {
    alert("Please enter some text");
  } else {
    messageOut.innerHTML = message;
    messageIn.value = "";
  }
}
