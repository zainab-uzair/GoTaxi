function filterRides(btn, type) {
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.remove('bg-primary','text-on-primary');
    b.classList.add('bg-surface-container-highest','text-on-surface');
  });
  btn.classList.add('bg-primary','text-on-primary');
  btn.classList.remove('bg-surface-container-highest','text-on-surface');
  const cards = document.querySelectorAll('[data-type]');
  cards.forEach(c => { c.style.display = (type === 'all' || c.dataset.type === type) ? '' : 'none'; });
}
