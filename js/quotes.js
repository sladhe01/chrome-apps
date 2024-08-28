const quotes = [
  { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe",
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Eddison",
  },
  { quote: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
  },
  {
    quote:
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    author: "William W. Purkey",
  },
  {
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
  },
  { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  {
    quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: "J.K. Rowling, Harry Potter and the Goblet of Fire",
  },
  { quote: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
  {
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
  },
  { quote: "A friend is someone who knows all about you and still loves you.", author: " Elbert Hubbard" },
  { quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { quote: "Always forgive your enemies nothing annoys them so much.", author: "Oscar Wilde" },
  {
    quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    author: "Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches",
  },
  { quote: "Live as if you were to die tomorrow. Learn as if you were to live forever", author: "Mahatma Gandhi" },
  { quote: "We accept the love we think we deserve.", author: "Stephen Chbosky, The Perks of Being a Wallflower" },
  { quote: "Without music, life would be a mistake.", author: "Friedrich Nietzsche, Twilight of the Idols" },
  {
    quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
    author: "Oscar Wilde, The Happy Prince and Other Stories",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together",
    author: "Marilyn Monroe",
  },
  {
    quote: "It is better to be hated for what you are than to be loved for what you are not.",
    author: "Andre Gide, Autumn Leaves",
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: "H. Jackson Brown Jr., P.S. I Love You",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
console.log(todaysQuote);
