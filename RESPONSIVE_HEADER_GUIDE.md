# Responsive Header Implementation Guide

## Overview
This guide provides the complete HTML and CSS code for a responsive header that matches your contact page design in mobile view while maintaining the full desktop experience across all pages.

## Key Features
- **Desktop View**: Full-featured header with top bar, logo, search, navigation menu
- **Mobile View (768px and below)**: Simplified header matching contact page design
  - Hamburger menu icon on the left
  - Centered logo
  - Search and shopping bag icons on the right
  - Bottom navigation bar with 5 items (Home, Shop, Account, Call, More)
  - Slide-out side menu with all navigation options

## Mobile Header Specifications
- **Layout**: Three-column layout (Menu Icon | Logo | Icons)
- **Logo Size**: 60px height with centered alignment
- **Menu Button**: Hamburger icon (#fas fa-bars)
- **Top Right Icons**: Search (#fas fa-search) and Shopping bag (#fas fa-shopping-bag)
- **Bottom Navigation**: Fixed bottom bar with 5 navigation items
- **Color Scheme**: White background with dark text
- **Spacing**: 12px vertical padding, 15px horizontal padding

## HTML Structure
The header includes:
1. Desktop Top Bar (hidden on mobile)
2. Desktop Navigation Menu (hidden on mobile)
3. Mobile Top Header (shown only on mobile)
4. Mobile Slide-out Menu (shown when hamburger clicked)
5. Mobile Bottom Navigation (fixed at bottom on mobile)

## CSS Responsive Breakpoints
- Desktop: All sections visible
- Tablet (≤ 1024px): Adjusted spacing
- Mobile (≤ 768px): Mobile layout activated
- Small Mobile (≤ 480px): Compact spacing

## Implementation
Copy the HTML structure from all pages and ensure consistent CSS is applied across the site.
