function selectType(btn, type) {
  document.querySelectorAll('.rtype').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function acceptBid(name, fare) {
  showToast(name + ' accepted your offer of ' + fare);
  setTimeout(() => navigate('track'), 1200);
}

function broadcastOffer() {
  const dest = document.getElementById('dropoffInput').value;
  if (!dest.trim()) { showToast('Please enter your destination!'); document.getElementById('dropoffInput').focus(); return; }
  const fare = document.getElementById('fareInput').value || '450';
  showToast('Offer of Rs. ' + fare + ' broadcast! Finding drivers...');
  setTimeout(() => navigate('track'), 1500);
}
