const products = [
  { id: 1, name: "Mechanical Keyboard", category: "Aksesoris", price: 850000, rating: 4.8 },
  { id: 2, name: "Wireless Mouse", category: "Aksesoris", price: 320000, rating: 4.3 },
  { id: 3, name: "24-inch Monitor", category: "Hardware", price: 2150000, rating: 4.6 },
  { id: 4, name: "USB-C Hub", category: "Aksesoris", price: 275000, rating: 4.1 },
  { id: 5, name: "Laptop Stand", category: "Workspace", price: 410000, rating: 4.4 },
  { id: 6, name: "Desk Lamp", category: "Workspace", price: 290000, rating: 4.0 },
  { id: 7, name: "Noise-Canceling Headset", category: "Audio", price: 1550000, rating: 4.7 },
  { id: 8, name: "Webcam 1080p", category: "Hardware", price: 670000, rating: 4.2 }
];

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortSelect = document.getElementById("sortSelect");
const resetBtn = document.getElementById("resetBtn");
const productGrid = document.getElementById("productGrid");
const resultInfo = document.getElementById("resultInfo");

function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);
}

function renderItems(items) {
  productGrid.innerHTML = "";

  if (!items.length) {
    productGrid.innerHTML = `<p>Tidak ada produk yang cocok.</p>`;
    return;
  }

  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "product-card";
    article.innerHTML = `
      <h3>${item.name}</h3>
      <p class="meta">Kategori: ${item.category}</p>
      <p class="meta">Harga: ${formatRupiah(item.price)}</p>
      <p class="meta">Rating: ${item.rating}</p>
    `;
    productGrid.appendChild(article);
  });
}

function getProcessedItems() {
  const keyword = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  const sortValue = sortSelect.value;

  let filtered = [...products].filter((item) => {
    const byKeyword = item.name.toLowerCase().includes(keyword);
    const byCategory = selectedCategory === "all" || item.category === selectedCategory;
    return byKeyword && byCategory;
  });

  switch (sortValue) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "rating-desc":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case "name-asc":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      filtered.sort((a, b) => a.id - b.id);
  }

  return filtered;
}

function updateCatalog() {
  const processed = getProcessedItems();
  resultInfo.textContent = `Menampilkan ${processed.length} dari ${products.length} produk`;
  renderItems(processed);
}

function initializeCategoryFilter() {
  const categories = [...new Set(products.map((p) => p.category))].sort();
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

[searchInput, categoryFilter, sortSelect].forEach((el) => {
  el.addEventListener("input", updateCatalog);
  el.addEventListener("change", updateCatalog);
});

resetBtn.addEventListener("click", () => {
  searchInput.value = "";
  categoryFilter.value = "all";
  sortSelect.value = "default";
  updateCatalog();
});

initializeCategoryFilter();
updateCatalog();
