const search = document.getElementById('search');
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');
const empty = document.getElementById('empty');
const toast = document.getElementById('toast');
let activeFilter = 'all';

// Setiap dari 112 preview mendapat waktu mulai yang berbeda.
// Delay dibuat deterministik agar konsisten setiap reload.
cards.forEach((card, index) => {
  const delay = ((index * 0.137) % 2.8).toFixed(2);
  card.style.setProperty('--animation-delay', `${delay}s`);
});

function filterCards(){
  const query = search.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const name = (card.dataset.name || '').toLowerCase();
    const category = (card.dataset.category || '').toLowerCase();
    const matchFilter = activeFilter === 'all' || category === activeFilter;
    const matchSearch = !query || name.includes(query) || category.includes(query);
    const show = matchFilter && matchSearch;
    card.style.display = show ? '' : 'block';
    if(!show) card.style.display = 'none';
    if(show) visible++;
  });
  empty.style.display = visible ? 'none' : 'block';
}

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    activeFilter = button.dataset.filter;
    filterCards();
  });
});

search.addEventListener('input', filterCards);

document.querySelectorAll('.copy').forEach(button => {
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.code || '');
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 1600);
    } catch {
      const area = document.createElement('textarea');
      area.value = button.dataset.code || '';
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      area.remove();
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 1600);
    }
  });
});

filterCards();
