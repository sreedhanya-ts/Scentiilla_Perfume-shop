# 🎨 Quick Reference - Black & White Theme Colors

## Essential Color Codes

```
BLACKS & DARK GRAYS
├─ Pure Black          #000000  (Headlines, dark text, pure black elements)
├─ Dark Charcoal       #1a1a1a  (Footer background)
├─ Dark Gray           #2d2d2d  (Buttons, primary accents, icons)
└─ Charcoal            #333333  (Star ratings, medium accents)

LIGHT GRAYS & WHITES
├─ Medium Gray         #555555  (Body text, secondary info)
├─ Light Gray          #888888  (Muted text, disabled states)
├─ Border Gray         #999999  (Borders, subtle lines)
├─ Very Light Gray     #e5e5e5  (Subtle backgrounds)
├─ Light Gray BG       #f0f0f0  (Soft backgrounds)
├─ Off-White           #f5f5f5  (Light section backgrounds)
└─ Pure White          #ffffff  (Cards, main backgrounds, text)

THEME SPECIFIC
├─ Top Bar BG          #fafafa  (Header top bar)
├─ Light Gray Border   #d0d0d0  (Borders, dividers)
└─ Charcoal Footer     #1a1a1a  (Dark footer)
```

## Quick Color Swaps

### For Headlines
```css
color: #000000;  /* Pure Black */
```

### For Body Text
```css
color: #333333;  /* Dark Charcoal */
```

### For Secondary Text
```css
color: #555555;  /* Medium Gray */
```

### For Muted Text
```css
color: #888888;  /* Light Gray */
```

### For Buttons
```css
background: #2d2d2d;  /* Dark Gray */
color: white;         /* White text */

&:hover {
  background: #000000;  /* Pure Black */
}
```

### For Card Backgrounds
```css
background: #ffffff;  /* Pure White */
border: 1px solid #e5e5e5;  /* Very Light Gray */
```

### For Section Backgrounds
```css
background: #f5f5f5;  /* Off-White */
```

### For Icons
```css
color: #2d2d2d;  /* Dark Gray */

&:hover {
  color: #000000;  /* Pure Black */
}
```

### For Borders
```css
border-color: #cccccc;  /* Neutral Gray */
```

### For Gradients
```css
background: linear-gradient(135deg, #f0f0f0 0%, #e5e5e5 100%);
```

## CSS Variable Reference

```css
:root {
  --primary-beige: #f0f0f0;      /* Light gray backgrounds */
  --secondary-beige: #e5e5e5;    /* Darker light backgrounds */
  --gold: #2d2d2d;               /* Primary accent (was gold) */
  --dark-gold: #1a1a1a;          /* Dark accent (was dark gold) */
  --black: #000000;              /* Pure black */
  --light-bg: #f5f5f5;           /* Light background sections */
  --text-light: #555555;         /* Secondary text */
  --border-color: #cccccc;       /* Border color */
}
```

## Component Colors

### Header
- Logo Text: `#000000`
- Social Icon Hover: `#2d2d2d`
- Border: `#d0d0d0`
- Search Border: `#999999`

### Hero Section
- Title: `#000000`
- Subtitle: `#555555`
- Button Text: `#2d2d2d`
- Button Border: `#2d2d2d`
- Button Hover BG: `#000000`
- Dot Active: `#2d2d2d`

### Products
- Card Border: `#e0e0e0`
- Category Tag: `#555555`
- Price: `#2d2d2d`
- Button: `#2d2d2d`
- Button Hover: `#000000`
- Icon BG: `#2d2d2d`
- Icon Hover: `#000000`

### Testimonials
- Avatar BG: `linear-gradient(135deg, #2d2d2d, #000000)`
- Stars: `#333333`
- Name: `#000000`
- Title: `#555555`
- Card Border: `#e0e0e0`
- Card BG: `#ffffff`

### Newsletter
- Title: `#000000`
- Subtitle: `#555555`
- Button: `#2d2d2d`
- Button Hover: `#000000`
- Input BG: `#ffffff`
- Input Border: Implicitly light

### Footer
- BG: `#1a1a1a`
- Title: `#ffffff`
- Tagline: `#666666`
- Text: `#888888`
- Link: `#888888`
- Link Hover: `#ffffff`
- Social Icon BG: `rgba(0, 0, 0, 0.3)`
- Social Icon: `#ffffff`
- Divider: `rgba(0, 0, 0, 0.3)`

## Quick Copy-Paste Gradients

### Light Section Background
```css
background: linear-gradient(135deg, #e5e5e5 0%, #f0f0f0 100%);
```

### Dark Accent Gradient
```css
background: linear-gradient(135deg, #2d2d2d, #000000);
```

### Subtle Radial Gradient
```css
background: radial-gradient(circle, rgba(0, 0, 0, 0.05) 0%, transparent 70%);
```

### Card Shadow
```css
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
```

### Hover Shadow
```css
box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
```

## Usage Tips

### For Luxury Look
- Use `#000000` for main headlines
- Use `#2d2d2d` for buttons and accents
- Keep backgrounds at `#ffffff` or `#f5f5f5`

### For Elegance
- Medium text in `#333333`
- Secondary text in `#555555`
- Hover effects go to `#000000`

### For Readability
- Dark text on light: `#2d2d2d` on `#ffffff`
- Light text on dark: `#ffffff` on `#1a1a1a`
- Gray on gray: Ensure contrast ratio > 4.5:1

### For Consistency
- All buttons: `#2d2d2d` → `#000000` on hover
- All icons: `#2d2d2d` → `#000000` on hover
- All links: `#2d2d2d` → `#000000` on hover

## Color Testing

### Text Contrast (WCAG AA)
✅ `#000000` on `#ffffff` - Perfect contrast
✅ `#2d2d2d` on `#ffffff` - Good contrast
✅ `#555555` on `#ffffff` - Good contrast
✅ `#888888` on `#ffffff` - Fair contrast
⚠️ `#999999` on `#ffffff` - Lower contrast
✅ `#ffffff` on `#1a1a1a` - Perfect contrast
✅ `#ffffff` on `#2d2d2d` - Perfect contrast

## Animation & Effects

### Smooth Transitions
```css
transition: all 0.3s ease;
```

### Hover Elevation
```css
transform: translateY(-3px);
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
```

### Scale Effect
```css
transform: scale(1.05);
```

### Opacity Overlay
```css
background: rgba(0, 0, 0, 0.7);
```

---

**Color Theme:** Black & White Monochromatic
**Status:** ✅ Production Ready
**Last Update:** November 12, 2025

🎨 **Remember:** Consistency is key! Use this guide to maintain the black & white theme across your entire website.
