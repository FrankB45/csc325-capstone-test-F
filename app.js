const products = Array.from(document.querySelectorAll('.product'));
const search = document.querySelector('#search');
const category = document.querySelector('#category');
const sort = document.querySelector('#sort');
function updateProducts() {
  const query = (search?.value || '').trim().toLowerCase();
  let visible = 0;
  products.forEach(product => {
    const matchesText = product.dataset.name.includes(query);
    const matchesCategory = !category || category.value === 'all' || category.value === product.dataset.category;
    product.hidden = !(matchesText && matchesCategory);
    if (!product.hidden) visible++;
  });
  const count = document.querySelector('#result-count');
  if (count) count.textContent = `${visible} ${visible === 1 ? 'item' : 'items'}`;
  const empty = document.querySelector('#empty-results');
  if (empty) empty.hidden = visible !== 0;
  const mode = sort?.value || 'featured';
  const ordered = [...products].sort((a,b) => mode === 'featured' ? Number(a.dataset.order)-Number(b.dataset.order) : mode === 'low' ? Number(a.dataset.price)-Number(b.dataset.price) : Number(b.dataset.price)-Number(a.dataset.price));
  const container = document.querySelector('#products');
  ordered.forEach(product => container?.append(product));
}
search?.addEventListener('input', updateProducts);
category?.addEventListener('change', updateProducts);
sort?.addEventListener('change', updateProducts);
let bag = 0;
document.querySelectorAll('.add').forEach(button => button.addEventListener('click', () => {
  bag++;
  const count = document.querySelector('#bag-count');
  if (count) count.textContent = `Bag · ${bag}`;
  button.textContent = `Added ${button.dataset.product}`;
}));
updateProducts();
