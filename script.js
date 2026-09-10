const search = document.getElementById('search');
const filters = document.querySelectorAll('.filter');
const cards = [...document.querySelectorAll('.card')];
const empty = document.getElementById('empty');
const toast = document.getElementById('toast');
let activeFilter = 'all';

function render() {
  const term = search.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const matchesFilter = activeFilter === 'all' || card.dataset.category === activeFilter;
    const matchesSearch = card.dataset.name.toLowerCase().includes(term) || card.dataset.category.includes(term);
    const show = matchesFilter && matchesSearch;
    card.style.display = show ? '' : 'block';
    if (!show) card.style.display = 'none';
    if (show) visible++;
  });
  empty.style.display = visible ? 'none' : 'block';
}

search.addEventListener('input', render);
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('active'));
  button.classList.add('active');
  activeFilter = button.dataset.filter;
  render();
}));

document.querySelectorAll('.copy').forEach(button => button.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(button.dataset.code);
    toast.textContent = 'CSS berhasil disalin ✓';
  } catch {
    toast.textContent = 'Tidak dapat menyalin CSS';
  }
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}));

render();