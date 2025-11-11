// ========== SHOPPING CART FUNCTIONALITY ==========
let cart = [];

// Add to cart button functionality
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const productName = this.getAttribute('data-product');
      const productPrice = parseFloat(this.getAttribute('data-price'));
      
      addToCart(productName, productPrice);
      showNotification(`${productName} added to cart!`);
    });
  });

  // Initialize slider
  initializeSlider();
  
  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      if (email) {
        showNotification('Thank you for subscribing!');
        this.reset();
      }
    });
  }

  // Wishlist functionality
  const wishlistButtons = document.querySelectorAll('.btn-icon');
  wishlistButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const icon = this.querySelector('i');
      if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        showNotification('Added to wishlist!');
      } else {
        icon.classList.add('far');
        icon.classList.remove('fas');
        showNotification('Removed from wishlist');
      }
    });
  });

  // Cart icon click to view cart
  const cartIcon = document.querySelector('.fa-shopping-bag')?.parentElement;
  if (cartIcon) {
    cartIcon.addEventListener('click', function(e) {
      e.preventDefault();
      const modal = new bootstrap.Modal(document.getElementById('cartModal'));
      updateCartModal();
      modal.show();
    });
  }
});

// Add item to cart
function addToCart(productName, productPrice) {
  const existingItem = cart.find(item => item.name === productName);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: productName,
      price: productPrice,
      quantity: 1
    });
  }
  
  updateCartCount();
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart count badge
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  // You can add a cart count badge display here
  console.log('Cart items:', totalItems);
}

// Update cart modal display
function updateCartModal() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartEmpty = document.getElementById('cart-empty');
  const cartTotal = document.getElementById('cart-total');
  
  cartItemsContainer.innerHTML = '';
  
  if (cart.length === 0) {
    cartEmpty.style.display = 'block';
    cartTotal.textContent = '$0.00';
    return;
  }
  
  cartEmpty.style.display = 'none';
  let total = 0;
  
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    
    const cartItemHTML = `
      <div class="cart-item">
        <div>
          <strong>${item.name}</strong><br>
          Quantity: <span class="quantity-control">
            <button class="qty-btn" onclick="decreaseQty('${item.name}')">-</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" onclick="increaseQty('${item.name}')">+</button>
          </span>
        </div>
        <div>
          <p style="margin: 0;">$${itemTotal.toFixed(2)}</p>
          <button class="btn-remove" onclick="removeFromCart('${item.name}')" style="background: none; border: none; color: #e74c3c; cursor: pointer; font-size: 12px;">Remove</button>
        </div>
      </div>
    `;
    
    cartItemsContainer.innerHTML += cartItemHTML;
  });
  
  cartTotal.textContent = '$' + total.toFixed(2);
}

// Modify cart quantity
function increaseQty(productName) {
  const item = cart.find(item => item.name === productName);
  if (item) {
    item.quantity += 1;
    updateCartModal();
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

function decreaseQty(productName) {
  const item = cart.find(item => item.name === productName);
  if (item) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      removeFromCart(productName);
      return;
    }
    updateCartModal();
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

// Remove from cart
function removeFromCart(productName) {
  cart = cart.filter(item => item.name !== productName);
  updateCartModal();
  updateCartCount();
  localStorage.setItem('cart', JSON.stringify(cart));
  showNotification('Item removed from cart');
}

// ========== SLIDER FUNCTIONALITY ==========
function initializeSlider() {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  if (slides.length === 0) return;

  function changeSlide(n) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    if (n >= slides.length) {
      slideIndex = 0;
    } else if (n < 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex = n;
    }
    
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
  }

  // Dot click functionality
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      changeSlide(i);
    });
  });

  // Auto-advance slides every 5 seconds
  setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    changeSlide(slideIndex);
  }, 5000);
}

// ========== NOTIFICATION SYSTEM ==========
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #b0906b;
    color: white;
    padding: 16px 24px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    z-index: 9999;
    animation: slideInUp 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutDown 0.3s ease';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// ========== RESTORE CART FROM LOCAL STORAGE ==========
function loadCartFromStorage() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCount();
  }
}

// Load cart when page loads
loadCartFromStorage();

// ========== ADD ANIMATIONS FOR SECTION VISIBILITY ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

// Observe all section elements
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'all 0.6s ease';
  observer.observe(section);
});

// ========== SMOOTH ANIMATIONS STYLESHEET ==========
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideOutDown {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(20px);
      opacity: 0;
    }
  }

  .qty-btn {
    background: #f0f0f0;
    border: 1px solid #ddd;
    padding: 2px 6px;
    cursor: pointer;
    border-radius: 2px;
    margin: 0 4px;
    transition: all 0.2s ease;
    font-size: 12px;
  }

  .qty-btn:hover {
    background: #b0906b;
    color: white;
    border-color: #b0906b;
  }

  .btn-remove:hover {
    text-decoration: underline;
  }

  .quantity-control {
    white-space: nowrap;
  }
`;
document.head.appendChild(style);
