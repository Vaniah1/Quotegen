const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

// Show Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: "Steve Jobs",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
    author: "Alan Watts",
  },
  {
    quote:
      "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't.",
    author: "Rikki Rogers",
  },
  {
    quote:
      "You are braver than you believe, stronger than you seem, and smarter than you think.",
    author: "A.A. Milne",
  },
  {
    quote: "Lupus may weaken my body, but it will never weaken my resolve. I am a warrior, and I fight with hope in my heart and courage in my soul.",
    author: "Emily R.",
  },
  {
    quote: "I have lupus, but lupus doesn't have me.",
    author: "Anonymous",
  },
  {
    quote: "Lupus is a part of my story, but it's not the whole story. I am defined by my dreams, my passions, and my resilience, not by my diagnosis.",
    author: "Ryan S.",
  },
  {
    quote: "Strength isn't about never struggling; it's about rising every time we fall. With lupus, I've learned to rise stronger than ever before.",
    author: "Jessica T",
  },
  {
    quote: "The universe is under no obligation to make sense to you.",
    author: "Neil deGrasse Tyson",
  },
  {
    quote:
      "Science is a way of thinking much more than it is a body of knowledge.",
    author: "Carl Sagan",
  },
  {
    quote:
      "The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    author: "Marie Curie",
  },
];

newQuote();
// This function generates a new random quote from the quotes array
// It first generates a random index using Math.random() and Math.floor()
// It then retrieves the quote object at that index from the quotes array
// It sets the opacity of the quote and author text elements to 0
// After a delay of 500ms, it updates the quote and author text elements with the new quote
// And sets the opacity of the quote and author text elements back to 1
function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.style.opacity = 0;
  authorText.style.opacity = 0;
  setTimeout(() => {
    quoteText.textContent = randomQuote.quote;
    authorText.textContent = randomQuote.author;
    quoteText.style.opacity = 1;
    authorText.style.opacity = 1;
  }, 500);
}

// Hide Loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.textContent = randomQuote.quote;
  authorText.textContent = randomQuote.author;
}
// This function generates a new random quote from the quotes array
// It first generates a random index using Math.random() and Math.floor()
// It then retrieves the quote object at that index from the quotes array
// Finally, it updates the quote and author text elements with the new quote

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotes();
