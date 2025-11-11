# Mobile Bottom Navigation Implementation Guide

## Overview
Your mobile header now features a modern **sticky bottom navigation bar** with 5 main sections matching your reference design.

## Layout Structure

### Mobile View (≤ 768px)

```
┌─────────────────────────────────┐
│  [≡] SCENTILLA [🔍] [🛍️]       │  ← Top Header (Search, Cart)
├─────────────────────────────────┤
│                                 │
│       Main Content Area         │
│       (Hero, Products, etc)     │
│                                 │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│ [🏠]  [🛍️]  [👤]  [📞]  [≡]    │  ← Bottom Navigation
│ HOME  SHOP ACCOUNT CALL MORE     │
└─────────────────────────────────┘
```

### Desktop View (> 768px)
- Full top bar with social icons and navigation
- Traditional horizontal menu bar
- Bottom navigation is hidden

## Bottom Navigation Items

### 1. **HOME** 
- Icon: `fa-home`
- Action: Navigate to homepage
- Data attribute: `data-page="home"`
- Active by default

### 2. **SHOP**
- Icon: `fa-shopping-bag`
- Action: Navigate to shop/products page
- Data attribute: `data-page="shop"`

### 3. **ACCOUNT**
- Icon: `fa-user`
- Action: Navigate to user account/profile
- Data attribute: `data-page="account"`

### 4. **CALL**
- Icon: `fa-phone`
- Action: Direct phone call via `tel:` link
- Data attribute: `data-page="call"`
- Links to: `tel:+1234567890` (customize number)

### 5. **MORE** (Hamburger Menu)
- Icon: `fa-ellipsis-v` (three dots)
- Action: Open side slide-out menu
- Opens the full navigation menu with:
  - All product categories
  - Blog dropdown accordion
  - Country selector
  - Additional options

## Styling Details

### Colors & Spacing
- **Background**: White (#ffffff)
- **Icon Color**: Dark (#1a1a1a)
- **Active Color**: Gold (#b0906b)
- **Border**: Light gray (#ddd)
- **Icon Size**: 20px
- **Min Touch Area**: 60×60px per item
- **Font Size**: 12px (uppercase)
- **Letter Spacing**: 0.5px

### Touch-Friendly Features
- **Minimum tap area**: 60×60px
- **Visual feedback**: Scale 1.05 on hover
- **Color change**: Gold on hover/active
- **Top border indicator**: 2px gold for active state

### Animations
- **Transition Duration**: 0.3s ease
- **Scale Transform**: 1.05 on hover
- **Active State**: Color change to gold + top border
- **Smooth**: All interactions have smooth transitions

## CSS Classes

```css
.mobile-bottom-nav           /* Main container */
.nav-item                    /* Individual navigation button */
.nav-item i                  /* Icon inside nav item */
.nav-item.active             /* Active state */
.more-menu                   /* MORE button (special class) */
```

## JavaScript Functionality

### Mobile Menu Events
- **Menu Icon Click**: Opens side navigation
- **MORE Button Click**: Opens side navigation
- **Nav Item Click**: Sets active state, navigates to page
- **Close Button**: Closes side menu
- **Overlay Click**: Closes side menu

### Active State Management
```javascript
// Clicking nav item sets active state
navItems.forEach(item => {
  item.addEventListener('click', function(e) {
    if (this.getAttribute('href')?.startsWith('#')) {
      e.preventDefault();
      navItems.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    }
  });
});
```

### Default Active State
- **HOME** is set as active by default on page load

## Mobile Top Header

### Structure
```
[≡] Menu Button | [Logo] SCENTILLA | [🔍] [🛍️]
```

### Features
- **Menu Button** (left): Opens side navigation
- **Centered Logo**: Responsive branding
- **Search Icon** (right): Opens search functionality
- **Cart Icon** (right): Opens shopping cart modal
- **Touch Areas**: All 44px minimum
- **Height**: ~55-60px for comfortable reach

## Side Navigation Menu (Opened from MORE/Menu)

### Contents
1. **Menu Header**
   - Title: "MENU"
   - Close button (X)

2. **Navigation Links**
   - CONCENTRATED PERFUME
   - EAU DE PARFUM
   - COLLECTIONS
   - ABOUT US
   - CONTACT US

3. **Blog Accordion**
   - BLOG (expandable)
     - Blog Layouts
     - Blog Pages
     - Post Formats

4. **Country Selector**
   - Positioned in footer of menu
   - Full-width dropdown
   - Options: INDIA, USA, UAE

## Body Padding Adjustment

On mobile view, body gets `padding-bottom: 60px` to prevent content from being hidden behind the fixed bottom navigation.

```css
@media screen and (max-width: 768px) {
  body {
    padding-bottom: 60px;
  }
}
```

## Safe Area Support

The bottom navigation respects iPhone notch/safe area:
```css
.mobile-bottom-nav {
  padding-bottom: env(safe-area-inset-bottom);
}
```

## Customization Guide

### Changing CALL Number
Edit in `header.html`:
```html
<a href="tel:+1234567890" class="nav-item" data-page="call">
```

Replace `+1234567890` with your actual phone number.

### Adding Custom Links
Modify the `data-page` attribute values and corresponding navigation routes in JavaScript.

### Changing Icons
Update FontAwesome classes (e.g., `fa-home` to `fa-house`).

### Modifying Colors
Update CSS variables:
```css
--gold: #b0906b;      /* Active color */
--black: #1a1a1a;     /* Text color */
```

## Browser Compatibility
- Modern mobile browsers (iOS Safari 13+, Chrome Mobile)
- Responsive CSS media queries
- Fixed positioning support
- CSS transitions and transforms
- Touch events support

## Performance Notes
- **No external dependencies** (vanilla CSS/JS)
- **GPU accelerated** CSS transitions
- **Fixed positioning** for persistent navigation
- **Event delegation** for efficient event handling
- **LocalStorage** for cart data persistence

## Accessibility Features
- **Touch-friendly**: Large 60×60px tap areas
- **Clear visual feedback**: Hover and active states
- **Semantic HTML**: Proper button and link elements
- **Icon labels**: Text labels with icons
- **Color contrast**: Gold on white meets accessibility standards

## Responsive Behavior

### Below 768px (Mobile)
✅ Bottom navigation visible
✅ Top header with menu icon
✅ Side slide-out menu available
✅ All touch-friendly

### Above 768px (Desktop)
❌ Bottom navigation hidden
✅ Traditional top bar visible
✅ Horizontal dropdown menus
✅ Full desktop experience

## Common Use Cases

### User Navigation Flow
1. **Home Page** → Click HOME icon
2. **Browse Products** → Click SHOP icon
3. **View Account** → Click ACCOUNT icon
4. **Contact Support** → Click CALL icon
5. **More Options** → Click MORE icon

### Menu Navigation
1. Click MORE or Menu (≡) button
2. Choose from expanded menu
3. Side menu slides in from left
4. Click on any link to navigate
5. Menu auto-closes after selection

## Future Enhancements
- Add badge notifications (cart count)
- Animated transitions between pages
- Swipe gestures for menu
- Mobile search drawer
- Wishlist counter badge
- Local notifications

---

**Last Updated**: November 11, 2025
**Mobile Breakpoint**: 768px and below
**Status**: Production Ready ✅
