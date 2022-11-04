const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

async function getRandomQuote() {
  const response = await fetch('https://type.fit/api/quotes')
  const data = await response.json()
  const quoteOfDay =  data[Math.floor(Math.random() * data.length)]
  printQuote(quoteOfDay)
}

function printQuote(data) {
  quote.innerHTML = data.text;
  author.innerHTML = `- ${data.author}`;
}

getRandomQuote()