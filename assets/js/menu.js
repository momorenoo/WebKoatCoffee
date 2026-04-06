// ================================
// KOAT KOPI - MENU JAVASCRIPT
// ================================

let allMenuItems = {};
let currentCategory = 'coffee';

// Fetch menu data
async function loadMenuData() {
  try {
    const response = await fetch('data/menu.json');
    allMenuItems = await response.json();
    console.log('Menu data loaded successfully');
    initMenuSystem();
  } catch (error) {
    console.error('Error loading menu data:', error);
    // Fallback data jika file tidak ada
    loadFallbackMenuData();
  }
}

// Fallback menu data (untuk testing)
function loadFallbackMenuData() {
  allMenuItems = {
    coffee: [
      { id: 1, name: 'Espresso', price: 10000, description: 'Kopi murni yang kuat dan nikmat', image: 'espresso.jpg', badge: null },
      { id: 2, name: 'Americano', price: 12000, description: 'Espresso + air panas', image: 'americano.jpg', badge: null },
      { id: 3, name: 'Latte', price: 15000, description: 'Kopi + susu, creamy', image: 'latte.jpg', badge: null },
      { id: 4, name: 'Si Koat', price: 18000, description: 'Signature drink', image: 'si-koat.jpg', badge: '🔥 Favorit' }
    ],
    nonCoffee: [
      { id: 6, name: 'Red Velvet', price: 18000, description: 'Minuman premium', image: 'red-velvet.jpg', badge: null },
      { id: 7, name: 'Matcha Latte', price: 20000, description: 'Matcha original', image: 'matcha.jpg', badge: null }
    ],
    food: [
      { id: 10, name: 'Mie Koat', price: 20000, description: 'Mie signature', image: 'mie-koat.jpg', badge: '🔥 Favorit' },
      { id: 11, name: 'Ayam Geprek', price: 18000, description: 'Ayam mentah', image: 'ayam-geprek.jpg', badge: null }
    ]
  };
  initMenuSystem();
}

// Initialize menu system
function initMenuSystem() {
  setupMenuCategoryButtons();
  displayMenuByCategory(currentCategory);
  displayBestsellers();
}

// Setup category buttons
function setupMenuCategoryButtons() {
  const categoryBtns = document.querySelectorAll('.menu-category-btn');

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove active class from all buttons
      categoryBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      // Update current category and display
      currentCategory = btn.dataset.category || btn.getAttribute('data-category');
      displayMenuByCategory(currentCategory);
    });
  });

  // Set first button as active
  if (categoryBtns.length > 0) {
    categoryBtns[0].classList.add('active');
  }
}

// Display menu items by category
function displayMenuByCategory(category) {
  const menuItemsContainer = document.querySelector('.menu-items');

  if (!menuItemsContainer || !allMenuItems[category]) {
    return;
  }

  const items = allMenuItems[category];

  // Clear existing items
  menuItemsContainer.innerHTML = '';

  // Create menu cards
  items.forEach((item, index) => {
    const card = createMenuCard(item);
    menuItemsContainer.appendChild(card);

    // Animate card entrance (stagger effect)
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

// Create menu card element
function createMenuCard(item) {
  const card = document.createElement('div');
  card.className = 'menu-card';
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';

  const emojiMap = {
    coffee: '☕',
    espresso: '☕',
    americano: '☕',
    latte: '☕',
    'si koat': '☕',
    cappuccino: '☕',
    'red velvet': '🍹',
    matcha: '🍵',
    'dark choco': '🍫',
    'iced tea': '🧊',
    'mie koat': '🍜',
    'ayam geprek': '🍗',
    'rice bowl': '🍚',
    'tahu goreng': '🟫'
  };

  const emoji = emojiMap[item.name.toLowerCase()] || '☕';

  card.innerHTML = `
    <div class="menu-card-image">
      ${emoji}
      ${item.badge ? `<div class="menu-card-badge">${item.badge}</div>` : ''}
    </div>
    <div class="menu-card-content">
      <h3 class="menu-card-name">${item.name}</h3>
      <p class="menu-card-desc">${item.description}</p>
      <div class="menu-card-footer">
        <div>
          <span class="menu-card-price-label">Mulai dari</span>
          <div class="menu-card-price">Rp ${item.price.toLocaleString('id-ID')}</div>
        </div>
        <button class="btn btn-small" data-whatsapp data-message="Halo, saya ingin memesan ${item.name} (${item.price.toLocaleString('id-ID')})">Order</button>
      </div>
    </div>
  `;

  return card;
}

// Search menu items
function searchMenuItems(query) {
  query = query.toLowerCase().trim();

  if (!query) {
    displayMenuByCategory(currentCategory);
    return;
  }

  const menuItemsContainer = document.querySelector('.menu-items');
  if (!menuItemsContainer) return;

  menuItemsContainer.innerHTML = '';

  // Search across all categories
  Object.keys(allMenuItems).forEach(category => {
    const items = allMenuItems[category];
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );

    filtered.forEach((item, index) => {
      const card = createMenuCard(item);
      menuItemsContainer.appendChild(card);

      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    });
  });

  if (menuItemsContainer.children.length === 0) {
    menuItemsContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem;">
        <p style="font-size: 1.2rem; color: #999;">Hmm... menu tidak ditemukan 😅</p>
      </div>
    `;
  }
}

// Get all bestsellers
function displayBestsellers() {
  const bestsellersContainer = document.querySelector('.bestseller-cards');

  if (!bestsellersContainer) {
    console.error('Bestsellers container not found');
    return;
  }

  bestsellersContainer.innerHTML = '';

  // Use the bestsellers category from JSON
  if (!allMenuItems.bestsellers || allMenuItems.bestsellers.length === 0) {
    bestsellersContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem;">
        <p style="font-size: 1.2rem; color: #999;">Belum ada menu favorit 😅</p>
      </div>
    `;
    return;
  }

  console.log('Found bestsellers:', allMenuItems.bestsellers);

  allMenuItems.bestsellers.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'bestseller-card';

    const emojiMap = {
      coffee: '☕',
      espresso: '☕',
      americano: '☕',
      latte: '☕',
      'si koat': '☕',
      cappuccino: '☕',
      'red velvet': '🍹',
      matcha: '🍵',
      'dark choco': '🍫',
      'iced tea': '🧊',
      'mie koat': '🍜',
      'mie koat pedas': '🍜',
      'rice bowl crispy': '🍚',
      'ayam geprek': '🍗',
      'tahu goreng': '🟫'
    };

    const emoji = emojiMap[item.name.toLowerCase()] || '⭐';

    card.innerHTML = `
      <div class="bestseller-badge">${item.badge}</div>
      <h3 class="bestseller-name">${emoji} ${item.name}</h3>
      <p class="bestseller-desc">${item.description}</p>
      <div class="bestseller-price">Rp ${item.price.toLocaleString('id-ID')}</div>
      <button class="btn btn-small" data-whatsapp data-message="Halo, saya ingin memesan ${item.name} (${item.price.toLocaleString('id-ID')})">Order Sekarang</button>
    `;

    bestsellersContainer.appendChild(card);
  });
}

// Initialize menu on page load
document.addEventListener('DOMContentLoaded', () => {
  loadMenuData();
});

// Export functions for use in HTML
window.searchMenu = searchMenuItems;
