const quotes = [
  {
    quote: '"The world doesnt come to the clever folks, it comes to the stubborn, obstinate, one-idea-at-a-time people."',
    writer: '- king akmal'
  },
  {
    quote: '"A good storyteller is a person who has a good memory and hopes other people havent."',
    writer: '- Irvin S. Cobb'
  },
  {
    quote: '"Im not lazy, Im on energy-saving mode."',
    writer: '- legend Akmal'
  },
  {
    quote: '"For every man there exists a bait which he cannot resist swallowing."',
    writer: '- Friedrich Nietzsche'
  },
  {
    quote: '"The moment somebody says to me, This is very risky, is the moment it becomes attractive to me."',
    writer: '- akmal'
  },
  {
    quote: '"Someones always saying, "Its not whether you win or lose,!but if you feel that way, youre as good as dead."',
    writer: '- bin laden'
  },
  {
    quote: '"One who is our friend is fond of us; one who iss fond of us isnt necessarily our friend."',
    writer: '- ceasar'
  },
  {
    quote: '"The only way to do great work is to love what you do."',
    writer: '- steve jobs'
  },
  
];





let btn = document.querySelector("#Qbtn");
let quoteContainer = document.querySelector(".container");
let startQuoteElement = document.querySelector("#startQuote");

btn.addEventListener("click", function() {
  let random = Math.floor(Math.random() * quotes.length);
  let randomColor = getRandomColor();

  quoteContainer.style.backgroundColor = randomColor;
  quoteContainer.style.transition = "background-color 0.5s ease-in-out";

  let quoteElement = document.querySelector(".quote");
  let writerElement = document.querySelector(".writer");
  let buttonElement = document.querySelector("#Qbtn");

  quoteElement.innerHTML = quotes[random].quote;
  writerElement.innerHTML = quotes[random].writer;

  quoteElement.style.color = randomColor;
  writerElement.style.color = randomColor;
  buttonElement.style.backgroundColor = randomColor;
});

// this  function allowws  to generate a random color
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//  this allows us to get the Function t the current time period (day, afternoon, night)
function getCurrentTimePeriod() {
  const currentHour = new Date().getHours();
  if (currentHour >= 5 && currentHour < 12) {
    return "day";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "afternoon";
  } else {
    return "night";
  }
}

// Display time period according to the time
startQuoteElement.textContent = "Let's start our " + getCurrentTimePeriod() + " with a quote";