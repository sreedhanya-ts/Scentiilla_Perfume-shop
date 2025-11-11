# Scentilla - Luxury Perfume Shop

A modern, elegant, and fully responsive luxury perfume e-commerce website built with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript.

## 🌟 Features

### ✨ Premium Design Elements
- **Soft Color Palette**: Beige (#f5f1ed, #e8dcd4), Gold (#b0906b), and Black (#1a1a1a) for luxury brand identity
- **Sticky Navigation Bar**: Always accessible header with logo, social icons, and shopping cart
- **Smooth Animations**: Fade-in effects, hover transitions, and scroll animations throughout
- **Responsive Layout**: Mobile-first approach with breakpoints for all device sizes

### 🛍️ Core Shopping Features
- **Hero Carousel**: Full-width rotating banner with 3 luxury perfume slides
- **Featured Products Section**: Grid display of 4 premium fragrances with:
  - Product images with hover zoom effects
  - Star ratings and customer reviews
  - Price display with discounts
  - Add to Cart functionality
  - Wishlist buttons

### 📦 Shopping Cart System
- **JavaScript-Based Cart Management**: Add, remove, and update item quantities
- **LocalStorage Integration**: Cart persists across browser sessions
- **Modal Cart View**: Bootstrap modal to review cart items
- **Real-Time Updates**: Quantity adjustment and total calculation
- **Toast Notifications**: User feedback for all actions

### 🏷️ Product Organization
- **Product Categories Section**: 4 category cards (Eau de Parfum, Eau de Toilette, Concentrated Perfume, Collections)
- **Interactive Cards**: Hover effects with smooth transitions
- **Category Exploration**: Each category links to dedicated product pages

### 📖 Content Sections
- **About the Brand**: Company story, values, and key features
- **Customer Testimonials**: 3 verified customer reviews with:
  - Avatar badges with initials
  - Star ratings
  - Authentic feedback
- **Newsletter Subscription**: Email capture form with gradient background
- **Footer**: Complete footer with:
  - Quick links
  - Customer service links
  - Contact information (address, phone, email, hours)
  - Social media icons

## 🎨 Design Features

### Color Scheme
```
Primary Beige:     #f5f1ed
Secondary Beige:   #e8dcd4
Gold Accent:       #b0906b
Dark Gold:         #8b7355
Black:             #1a1a1a
Light Background:  #f9f7f3
```

### Typography
- Font Family: Poppins (Google Fonts)
- Weights: 300, 400, 500, 600, 700
- Letter spacing for premium feel

### Animations
- **fadeIn**: Smooth appearance of elements
- **fadeInUp**: Content slides up on load
- **fadeInRight**: Sidebar elements slide in
- **slideDown**: Dropdown menu animation
- **Hover Effects**: Scale, transform, and shadow changes

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: 480px and below

### Mobile Optimizations
- Stacked navigation menu
- Single-column product layout
- Reduced font sizes
- Optimized touch targets
- Hidden slider dots on mobile

## 🛠️ Technical Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Custom properties (CSS variables), Flexbox, Grid
- **Bootstrap 5**: Responsive grid system and components
- **JavaScript (Vanilla)**: No jQuery dependency
- **Font Awesome 6**: Icon library

### Features
- Intersection Observer API for scroll animations
- LocalStorage for cart persistence
- Bootstrap Modal for cart display
- Fetch API for loading header component

## 📁 File Structure

```
perfume-shop/
├── index.html           # Main homepage
├── header.html          # Reusable header component
├── style.css            # Complete styling
├── script.js            # All JavaScript functionality
├── images/              # Logo and banner images
│   └── logo.png
└── README.md            # Documentation
```

## 🚀 How to Use

### Installation
1. Clone or download the repository
2. Ensure you have all files in the same directory
3. Open `index.html` in a web browser

### Shopping Cart
1. Click "Add to Cart" on any product
2. Click the shopping bag icon to view cart
3. Adjust quantities or remove items
4. Cart data persists using browser LocalStorage

### Navigation
- Use sticky header to navigate sections
- Click "Shop Now" buttons to jump to products
- Click category cards to explore collections
- Subscribe to newsletter for updates

## 🎯 Customization

### Update Products
Edit product cards in the Featured Products section:
```html
<h5 class="product-name">Your Product Name</h5>
<p class="product-category">Your Category</p>
<span class="price-current">$XX.XX</span>
<span class="price-original">$XX.XX</span>
```

### Change Colors
Update CSS variables in `style.css`:
```css
:root {
  --gold: #b0906b;
  --black: #1a1a1a;
  /* etc */
}
```

### Add More Slides
Add new slides to the hero carousel:
```html
<div class="slide" style="background: linear-gradient(...);">
  <div class="hero-content">
    <!-- Slide content -->
  </div>
</div>
<span class="dot"></span>
```

## 📋 Features Roadmap

- [ ] Product detail pages
- [ ] User authentication system
- [ ] Payment gateway integration
- [ ] Order tracking
- [ ] Customer reviews system
- [ ] Search functionality
- [ ] Wishlist persistence
- [ ] Newsletter backend
- [ ] Multi-language support
- [ ] Live chat support

## 🔐 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📞 Support

For issues or feature requests, please contact support@scentilla.com

## 📄 License

This website template is provided as-is for luxury fragrance retailers. Customize and use as needed for your business.

## 🙏 Credits

- **Design Inspiration**: Beeta theme (index-4 to index-7)
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Poppins)
- **Framework**: Bootstrap 5
- **Development**: Modern HTML5, CSS3, and vanilla JavaScript

---

**Version**: 1.0.0  
**Last Updated**: November 2025  
**Status**: Production Ready ✅
