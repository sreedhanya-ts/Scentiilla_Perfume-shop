# Products Collection Page - Scentiilla

## Overview
The products page (`products.html`) is a luxury-themed collection display for Scentiilla fragrances, featuring an elegant dark aesthetic that seamlessly integrates with the homepage design.

## Features

### 1. **Hero Section**
- Bold, centered "Our Collection" title with "Explore Our Scents" tagline
- Gradient background matching the luxury theme
- Smooth fade-in animation
- Accent line decoration

### 2. **Filter Section**
- Category-based filtering: All Products, For Women, For Men, Unisex
- Smooth transitions between filters
- Active state styling for better UX

### 3. **Product Grid**
- Responsive grid layout (auto-fill with minimum 280px width)
- 8 sample luxury fragrance products
- Automatically adjusts to 2 columns on tablets, 1 column on mobile

### 4. **Product Cards**
Each card includes:
- **Product Image**: Premium gradient placeholder with fragrance icon
- **Badge**: NEW, BESTSELLER, LIMITED, or LUXURY tags
- **Hover Effects**: 
  - Wishlist button (heart icon)
  - Quick view button (eye icon)
  - Image zoom effect
  - Elevated shadow effect
- **Product Details**:
  - Fragrance name (bold, modern typography)
  - Scent description (concise, evocative)
  - Star rating with review count
  - Price with strike-through original price
  - "Add to Cart" button with icon

### 5. **Product Examples**
1. **Blooming Essence** - For Women (Floral, 4.5★)
2. **Midnight Noir** - For Men (Oud & Leather, 5★)
3. **Golden Hour** - Unisex (Warm Amber, 5★) - Bestseller
4. **Velvet Romance** - For Women (Red Berries, 4.5★)
5. **Aqua Momentum** - For Men (Fresh Citrus, 5★) - Luxury
6. **Earthy Whisper** - Unisex (Vetiver, 4.5★)
7. **Sunset Serenity** - For Women (Peach, 5★) - Limited
8. **Steel & Smoke** - For Men (Tobacco, 5★)

### 6. **Footer**
- Matches homepage footer style
- Complete company information
- Quick links, categories, and contact details
- Social media links

## Design Specifications

### Color Palette
- Background: `#0f0f0f` (Almost black)
- Cards: `#1a1a1a` (Dark gray)
- Text Light: `#e0e0e0` (Light gray)
- Accent: `#e0a76f` (Golden)
- Borders: `#3a3a3a` (Gray border)

### Typography
- Font: Poppins (Google Fonts)
- Weights: 300 (light), 400 (regular), 600 (semibold), 700 (bold)
- Sizes scale responsively (72px → 32px on mobile)

### Spacing
- Card gap: 30px (desktop), 20px (tablet), 16px (mobile)
- Padding: Scales from 60px (desktop) to 30px (mobile)
- Balanced whitespace for premium feel

### Interactive Features
- **Filter Buttons**: Smooth transitions, active state highlighting
- **Add to Cart**: Visual feedback (changes to "Added to Cart")
- **Wishlist Toggle**: Heart icon fills on click
- **Hover Effects**: Subtle scale and shadow transitions
- **Mobile Navigation**: Full header and mobile menu integration

## Responsive Breakpoints

| Device | Width | Layout |
|--------|-------|--------|
| Desktop | 1024px+ | 4-5 columns |
| Tablet | 768px-1024px | 3 columns |
| Mobile | 480px-768px | 2 columns |
| Small Mobile | <480px | 1 column |

## Integration Notes

- ✅ Uses existing `style.css` (extended with product styles)
- ✅ Uses existing `script.js` (mobile menu initialization)
- ✅ Matches homepage header/footer structure
- ✅ Independent page - can be accessed directly
- ✅ Links back to homepage and other pages
- ✅ Fully responsive design
- ✅ Dark theme with premium aesthetic
- ✅ Font Awesome icons for visual elements
- ✅ Bootstrap 5 for layout support

## Usage

1. Open `products.html` in a browser
2. Use filter buttons to browse by category
3. Hover over cards to see quick actions
4. Click "Add to Cart" or heart icon for interactions
5. Navigate using the header menu

## File Structure

```
Perfume-shop/
├── products.html          # Products page
├── style.css              # Extended with product styles
├── script.js              # Mobile menu functionality
├── index.html             # Homepage
├── about-us.html          # About page
├── contact.html           # Contact page
└── images/                # Logo and assets
```

## Future Enhancements

- Add actual product images via image CDN
- Implement real add-to-cart functionality
- Connect to database for product data
- Add product detail modal/page
- Implement sort options (price, popularity, newest)
- Add search functionality
- Wishlist persistence (localStorage/database)
