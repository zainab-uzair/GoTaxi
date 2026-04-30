let currentRating = 0;

function setStars(n) {
  currentRating = n;
  const btns = document.querySelectorAll('.star-btn');
  btns.forEach((b, i) => {
    const icon = b.querySelector('.material-symbols-outlined');
    if (i < n) { icon.style.color='#aef2c4'; icon.style.fontVariationSettings="'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 24"; }
    else { icon.style.color='#bfc9bf'; icon.style.fontVariationSettings="'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24"; }
  });
}

function toggleChip(el) { el.classList.toggle('active'); }

function selectTip(btn, amount) {
  document.querySelectorAll('.tip-btn').forEach(b => { b.classList.remove('active'); b.style.background=''; });
  btn.classList.add('active');
}

function submitRating() {
  showToast('Thank you! ' + (currentRating || 5) + '★ rating submitted.');
  setTimeout(() => navigate('home'), 1500);
}
