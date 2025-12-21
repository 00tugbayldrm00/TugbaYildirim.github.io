const quotes = document.querySelectorAll('.quote');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let current = 0;

function showQuote(index) {
  quotes.forEach(q => q.classList.remove('active'));
  quotes[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  current = (current - 1 + quotes.length) % quotes.length;
  showQuote(current);
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % quotes.length;
  showQuote(current);
});
