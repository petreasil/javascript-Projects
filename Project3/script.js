const quotes = [
  {
    name: "Stephan King",
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell dont deserve me at my best."
  },
  {
    name: "Dr. Seuss",
    quote: "Don't cry because it's over, smile because it happened"
  },
  {
    name: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken."
  },
  {
    name: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
  },
  {
    name: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul."
  }
];
//select
const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");
//evnet listner

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}
