// ===== PRODUCT DETAILS PAGE FUNCTIONALITY =====

// Product Data Object
const productData = {
  1: {
    id: 1,
    name: 'Essence Luxe',
    category: 'Rose & Vanilla Blend',
    price: 89.99,
    originalPrice: 129.99,
    description: 'Essence Luxe is a captivating blend of rose and vanilla that creates an unforgettable olfactory experience. With its sophisticated composition and long-lasting formula, this perfume is perfect for evening occasions and special moments.',
    image: 'images/product5.png',
    rating: 4.8,
    reviews: 128,
    inStock: true
  },
  2: {
    id: 2,
    name: 'Velvet Dreams',
    category: 'Plum & Amber Notes',
    price: 74.99,
    originalPrice: 99.99,
    description: 'Velvet Dreams offers a luxurious combination of plum and amber notes. This sophisticated fragrance features deep, warm undertones that create an air of mystery and elegance.',
    image: 'images/product2.png',
    rating: 4.7,
    reviews: 94,
    inStock: true
  },
  3: {
    id: 3,
    name: 'Fresh Mint',
    category: 'Eucalyptus & Bergamot',
    price: 69.99,
    originalPrice: 89.99,
    description: 'Fresh Mint is an invigorating fragrance that combines eucalyptus and bergamot for a crisp, clean scent. Perfect for daytime wear, it offers a refreshing boost whenever you need it.',
    image: 'images/product3.png',
    rating: 4.9,
    reviews: 156,
    inStock: true
  },
  4: {
    id: 4,
    name: 'Cherry Blossom',
    category: 'Peach & White Musk',
    price: 94.99,
    originalPrice: 139.99,
    description: 'Cherry Blossom blends the sweetness of peach with the purity of white musk. This floral fragrance is light, romantic, and perfect for anyone seeking elegance and grace.',
    image: 'images/product4.png',
    rating: 4.9,
    reviews: 203,
    inStock: true
  },
  5: {
    id: 5,
    name: 'Royal Essence',
    category: 'Jasmine & Sandalwood',
    price: 99.99,
    originalPrice: 149.99,
    description: 'Royal Essence combines the exotic notes of jasmine with the warmth of sandalwood. A truly regal fragrance that commands attention and admiration.',
    image: 'images/product1.png',
    rating: 4.8,
    reviews: 187,
    inStock: true
  }
};

// Initialize product details on page load
document.addEventListener('DOMContentLoaded', function() {
  loadProductDetails();
  setupEventListeners();
  checkWishlistStatus();
});

// Load product details based on URL parameter
function loadProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('product') || 1;
  
  const product = productData[productId];
  
  if (product) {
    // Update breadcrumb
    document.getElementById('breadcrumb-product').textContent = product.name;
    
    // Update main image
    document.getElementById('mainImage').src = product.image;
    
    // Update product info
    document.getElementById('productTitle').textContent = product.name;
    document.getElementById('productCategory').textContent = product.category;
    document.getElementById('productPrice').textContent = '$' + product.price.toFixed(2);
    document.getElementById('productOriginal').textContent = '$' + product.originalPrice.toFixed(2);
    document.getElementById('productDesc').textContent = product.description;
    
    // Update specifications
    document.getElementById('specName').textContent = product.name;
    document.getElementById('specCategory').textContent = product.category;
    
    // Update Add to Cart button
    const addToCartBtn = document.getElementById('addToCartBtn');
    addToCartBtn.setAttribute('data-product', product.name);
    addToCartBtn.setAttribute('data-price', product.price.toFixed(2));
    
    // Update page title
    document.title = product.name + ' - Scentiilla';
  }
}

// Setup event listeners
function setupEventListeners() {
  // Quantity buttons
  document.getElementById('increaseQty').addEventListener('click', increaseQuantity);
  document.getElementById('decreaseQty').addEventListener('click', decreaseQuantity);
  
  // Quantity input change
  document.getElementById('quantityInput').addEventListener('change', function() {
    updateQuantityButtons();
    updateTotalPrice();
  });
  
  // Quantity input validation
  document.getElementById('quantityInput').addEventListener('input', function() {
    let val = parseInt(this.value) || 1;
    const min = parseInt(this.getAttribute('min')) || 1;
    const max = parseInt(this.getAttribute('max')) || 10;
    
    if (val < min) this.value = min;
    if (val > max) this.value = max;
    
    updateQuantityButtons();
    updateTotalPrice();
  });
  
  // Add to cart button
  document.getElementById('addToCartBtn').addEventListener('click', addProductToCart);
  
  // Wishlist button
  document.querySelector('.btn-wishlist').addEventListener('click', toggleWishlist);
  
  // Thumbnail gallery
  setupThumbnailGallery();
  
  // Mobile menu functionality
  setupMobileMenu();
  
  // Initialize quantity buttons state and total price
  updateQuantityButtons();
  updateTotalPrice();
}

// Increase quantity
function increaseQuantity() {
  const input = document.getElementById('quantityInput');
  const maxQty = parseInt(input.getAttribute('max')) || 10;
  const currentQty = parseInt(input.value);
  
  if (currentQty < maxQty) {
    input.value = currentQty + 1;
    updateQuantityButtons();
    updateTotalPrice();
  }
}

// Decrease quantity
function decreaseQuantity() {
  const input = document.getElementById('quantityInput');
  const minQty = parseInt(input.getAttribute('min')) || 1;
  const currentQty = parseInt(input.value);
  
  if (currentQty > minQty) {
    input.value = currentQty - 1;
    updateQuantityButtons();
    updateTotalPrice();
  }
}

// Update quantity buttons state
function updateQuantityButtons() {
  const input = document.getElementById('quantityInput');
  const decreaseBtn = document.getElementById('decreaseQty');
  const increaseBtn = document.getElementById('increaseQty');
  const currentQty = parseInt(input.value);
  const minQty = parseInt(input.getAttribute('min')) || 1;
  const maxQty = parseInt(input.getAttribute('max')) || 10;
  
  // Disable decrease button if at minimum
  if (currentQty <= minQty) {
    decreaseBtn.disabled = true;
    decreaseBtn.style.opacity = '0.5';
    decreaseBtn.style.cursor = 'not-allowed';
  } else {
    decreaseBtn.disabled = false;
    decreaseBtn.style.opacity = '1';
    decreaseBtn.style.cursor = 'pointer';
  }
  
  // Disable increase button if at maximum
  if (currentQty >= maxQty) {
    increaseBtn.disabled = true;
    increaseBtn.style.opacity = '0.5';
    increaseBtn.style.cursor = 'not-allowed';
  } else {
    increaseBtn.disabled = false;
    increaseBtn.style.opacity = '1';
    increaseBtn.style.cursor = 'pointer';
  }
}

// Update total price based on quantity
function updateTotalPrice() {
  const quantity = parseInt(document.getElementById('quantityInput').value) || 1;
  const priceText = document.getElementById('productPrice').textContent;
  const price = parseFloat(priceText.replace('$', ''));
  const totalPrice = (price * quantity).toFixed(2);
  const totalPriceDisplay = document.getElementById('totalPriceDisplay');
  const totalPriceElement = document.getElementById('totalPrice');
  
  // Update total price
  totalPriceElement.textContent = '$' + totalPrice;
  
  // Show/hide total price display
  if (quantity > 1) {
    totalPriceDisplay.style.display = 'block';
  } else {
    totalPriceDisplay.style.display = 'none';
  }
}

// Change main image on thumbnail click
function changeMainImage(element) {
  const thumbnailItems = document.querySelectorAll('.thumbnail-item');
  thumbnailItems.forEach(item => item.classList.remove('active'));
  
  element.classList.add('active');
  const img = element.querySelector('img');
  document.getElementById('mainImage').src = img.src;
}

// Add product to cart
function addProductToCart() {
  const quantity = parseInt(document.getElementById('quantityInput').value);
  const productName = document.getElementById('addToCartBtn').getAttribute('data-product');
  const productPrice = parseFloat(document.getElementById('addToCartBtn').getAttribute('data-price'));
  
  // Get existing cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Check if product already exists in cart
  const existingItem = cart.find(item => item.name === productName);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      name: productName,
      price: productPrice,
      quantity: quantity,
      image: document.getElementById('mainImage').src
    });
  }
  
  // Save to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Show success message
  showCartNotification(productName, quantity);
  
  // Reset quantity
  document.getElementById('quantityInput').value = 1;
}

// Show cart notification
function showCartNotification(productName, quantity) {
  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-check-circle"></i>
      <span>${quantity} ${quantity > 1 ? 'items' : 'item'} of ${productName} added to cart</span>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Toggle wishlist
function toggleWishlist() {
  const btn = document.querySelector('.btn-wishlist');
  const productName = document.getElementById('productTitle').textContent;
  const productPrice = document.getElementById('productPrice').textContent;
  const productImage = document.getElementById('mainImage').src;
  
  btn.classList.toggle('active');
  
  // Get existing wishlist from localStorage
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  
  if (btn.classList.contains('active')) {
    // Add to wishlist
    const existingItem = wishlist.find(item => item.name === productName);
    
    if (!existingItem) {
      wishlist.push({
        name: productName,
        price: productPrice,
        image: productImage
      });
    }
    
    btn.innerHTML = '<i class="fas fa-heart"></i>';
    btn.style.background = '#707070';
    btn.style.color = '#ffffff';
    showWishlistNotification(productName, true);
  } else {
    // Remove from wishlist
    wishlist = wishlist.filter(item => item.name !== productName);
    btn.innerHTML = '<i class="far fa-heart"></i>';
    btn.style.background = 'transparent';
    btn.style.color = '#707070';
    showWishlistNotification(productName, false);
  }
  
  // Save to localStorage
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Show wishlist notification
function showWishlistNotification(productName, added) {
  const notification = document.createElement('div');
  notification.className = 'wishlist-notification';
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${added ? 'fa-heart' : 'fa-trash'}"></i>
      <span>${added ? productName + ' added to wishlist' : productName + ' removed from wishlist'}</span>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Check if product is in wishlist on page load
function checkWishlistStatus() {
  const productName = document.getElementById('productTitle').textContent;
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const isInWishlist = wishlist.find(item => item.name === productName);
  
  const btn = document.querySelector('.btn-wishlist');
  
  if (isInWishlist) {
    btn.classList.add('active');
    btn.innerHTML = '<i class="fas fa-heart"></i>';
    btn.style.background = '#707070';
    btn.style.color = '#ffffff';
  } else {
    btn.classList.remove('active');
    btn.innerHTML = '<i class="far fa-heart"></i>';
    btn.style.background = 'transparent';
    btn.style.color = '#707070';
  }
}

// Setup thumbnail gallery
function setupThumbnailGallery() {
  const thumbnailItems = document.querySelectorAll('.thumbnail-item');
  thumbnailItems.forEach(item => {
    item.addEventListener('click', function() {
      changeMainImage(this);
    });
  });
}

// Setup mobile menu functionality
function setupMobileMenu() {
  const mobileMenuIcon = document.getElementById('mobileMenuIcon');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const closeMenu = document.getElementById('closeMenu');

  if (!mobileMenuIcon) return;

  mobileMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
  });

  mobileMenuOverlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
  });

  // Close menu on link click
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
    });
  });
}

// CSS for cart notification
const style = document.createElement('style');
style.innerHTML = `
  .cart-notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #707070;
    color: #ffffff;
    padding: 16px 24px;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 12px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  .cart-notification.show {
    opacity: 1;
    transform: translateY(0);
  }

  .wishlist-notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #707070;
    color: #ffffff;
    padding: 16px 24px;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 12px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  .wishlist-notification.show {
    opacity: 1;
    transform: translateY(0);
  }

  .notification-content {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .notification-content i {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    .cart-notification,
    .wishlist-notification {
      bottom: 80px;
      right: 10px;
      left: 10px;
      padding: 12px 16px;
      font-size: 13px;
    }
  }
`;
document.head.appendChild(style);
