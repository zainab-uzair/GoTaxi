const screens = ['home','book','track','activity','wallet','profile','driver','safety','rate'];
const sideIds = ['home','book','track','profile','driver'];

function navigate(id) {
  screens.forEach(s => {
    const el = document.getElementById('screen-'+s);
    if (el) { el.classList.remove('active'); el.style.display='none'; }
  });
  const target = document.getElementById('screen-'+id);
  if (target) { target.classList.add('active'); target.style.display='flex'; }

  sideIds.forEach(s => {
    const el = document.getElementById('side-'+s);
    if (el) el.classList.remove('active');
  });
  if (document.getElementById('side-'+id)) document.getElementById('side-'+id).classList.add('active');

  window.scrollTo(0,0);
  currentScreen = id;
}
