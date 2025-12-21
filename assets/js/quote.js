const quotes = document.querySelectorAll('.quotes .quote');
const prevBtn = document.querySelector('button.prev');
const nextBtn = document.querySelector('button.next');
let currentIndex = 0;

function showQuote(index) {
  quotes.forEach((quote, i) => {
    quote.classList.remove('active');
    if (i === index) quote.classList.add('active');
  });
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % quotes.length;
  showQuote(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
  showQuote(currentIndex);
});
