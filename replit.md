# Autobahn Solutions - One Page Landing Website

## Overview

This is a static, single-page website for Autobahn Solutions, an automotive service and spare parts company in Bangladesh. The project is built as a modern, responsive landing page using HTML5, Bootstrap 5.x, and vanilla JavaScript, focusing on showcasing premium automotive services and genuine spare parts to luxury car owners and fleet clients.

## User Preferences

Preferred communication style: Simple, everyday language.
Typography preferences: Minimal, clean fonts with lighter weights for better background image visibility.

## System Architecture

### Frontend Architecture
- **Single Page Application (SPA)**: One-page scrollable layout with smooth navigation
- **Responsive Design**: Mobile-first approach using Bootstrap 5.x grid system
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with interactive features
- **Modern Web Standards**: Semantic HTML5 markup with accessibility considerations

### Technology Stack
- **HTML5**: Semantic markup structure
- **Bootstrap 5.x**: CSS framework for responsive design and UI components
- **Vanilla JavaScript**: No dependencies or frameworks for lightweight performance
- **Custom CSS**: Additional styling with CSS custom properties (variables)

## Key Components

### 1. Navigation System
- Fixed-top navbar with backdrop blur effect
- Smooth scrolling navigation between sections
- Responsive collapse menu for mobile devices
- Brand identity with automotive-themed iconography

### 2. Hero Section
- Full-screen background with overlay for visual impact
- Primary value proposition and call-to-action buttons
- Animated text reveals for enhanced user engagement
- Dual CTA strategy: "Book Service" and "Browse Parts"

### 3. Content Sections
- About Us: Company credibility and experience highlights
- Services: Premium automotive service offerings
- Parts: Genuine and aftermarket spare parts catalog
- Contact: Multi-channel contact information and inquiry form

### 4. Interactive Features
- Scroll reveal animations using Intersection Observer API
- Lazy loading for performance optimization
- Contact form with client-side validation
- Typewriter effect for dynamic text display

## Data Flow

### Static Content Delivery
1. **Initial Load**: HTML, CSS, and JavaScript assets loaded from CDN and local files
2. **Progressive Enhancement**: JavaScript adds interactive features after DOM load
3. **Animation Triggers**: Intersection Observer monitors scroll position for reveal animations
4. **Form Handling**: Client-side validation and submission preparation

### User Interaction Flow
1. User lands on hero section with primary messaging
2. Smooth scroll navigation guides through service offerings
3. Interactive elements provide engagement without page reloads
4. Contact form captures leads with immediate validation feedback

## External Dependencies

### CDN Resources
- **Bootstrap 5.3.2**: CSS framework and JavaScript components
- **Bootstrap Icons 1.11.2**: Icon library for UI elements
- **Google Fonts**: Inter and Poppins font families for typography

### Third-Party Integrations
- Font delivery via Google Fonts CDN
- Bootstrap framework via jsDelivr CDN
- No database or backend services required

### Custom Assets
- **SVG Illustrations**: Custom-designed automotive parts images (filters, brake pads, suspension, engine oil)
- **WebP Hero Background**: Optimized workshop image showing luxury vehicles
- **Brand Assets**: Company logo and favicon
- **Static Images**: Self-contained vector graphics requiring no external dependencies

### Asset Organization
- All assets consolidated in `/assets` folder structure for easy deployment
- Images optimized for web performance (WebP, SVG formats)
- Favicon generated from brand logo for consistent branding

## Deployment Strategy

### Static Hosting Approach
- **File Structure**: Simple directory structure with separated concerns
  - `index.html`: Main page markup
  - `css/style.css`: Custom styling
  - `js/main.js`: Interactive functionality
- **CDN Dependencies**: External resources loaded from reliable CDNs
- **Performance Optimization**: Minimal local assets, lazy loading implementation

### Hosting Requirements
- Static file hosting capability
- HTTPS support for security
- Global CDN for performance (optional but recommended)
- No server-side processing required

### Browser Compatibility
- Modern browsers with ES6+ support
- Graceful degradation for older browsers
- Mobile-responsive across all device sizes
- Progressive enhancement ensures core functionality without JavaScript

The architecture prioritizes simplicity, performance, and maintainability while delivering a professional automotive industry presence with modern web standards and user experience best practices.

## Recent Changes

### September 2, 2025
- **Comprehensive Theme Switcher**: Implemented light/dark mode toggle with system preference detection and localStorage persistence
- **Enhanced Animations**: Added swirl transition effect that swaps sun/moon icons with proper rotation and scaling
- **Realistic Colors**: Sun icon displays in golden yellow (#ffd700) with brighter hover state, moon icon in ghost white (#f8f8ff) with pure white hover
- **Dark Mode Optimization**: Fixed testimonials section styling and improved font contrast ratios for accessibility
- **Visual Feedback**: Swirl animation creates smooth icon transition during theme switching with proper timing
- **Accessibility**: Maintained WCAG contrast standards across both themes with enhanced readability

### August 23, 2025
- **Modern Brands Marquee**: Replaced static carousel with auto-scrolling marquee component inspired by GitHub homepage
- **Logo Normalization**: Applied individual CSS sizing rules to ensure uniform appearance across different logo dimensions
- **Minimal Effects**: Added subtle shimmer animation on hover with proper dimensions (120px width, 60px height)
- **Social Media Optimization**: Added comprehensive Open Graph and Twitter Card meta tags for proper social sharing
- **Responsive Design**: Maintained mobile-responsive scaling with proportional logo adjustments
- **Performance**: Removed pause controls and background cards for cleaner, faster rendering

### July 16, 2025
- **Project Cleanup**: Removed all unnecessary files from attached_assets folder and docs directory
- **Asset Optimization**: Deleted backup logo files and unused client logos (Akij, Basundhara, BRAC Bank, etc.)
- **Carousel Controls**: Fixed brands carousel arrow icons with proper left (←) and right (→) arrows
- **CSS Conflicts**: Resolved universal carousel CSS rules conflicting with brands carousel specific styling
- **JavaScript Optimization**: Fixed duplicate DOMContentLoaded event listeners causing initialization conflicts
- **Brands Carousel**: Successfully disabled auto-movement through JavaScript control (interval: false, ride: false)
- **File Structure**: Streamlined project to essential files only - reduced from multiple reference images to production-ready assets

### July 11, 2025
- Updated hero section typography for minimal, clean appearance
- Changed font from Poppins to Inter with lighter weights (300-400)
- Reduced background overlay opacity for better image visibility
- Fixed header clipping issues across all device widths with proper padding
- Optimized responsive font sizes: 3.2rem desktop, 2.8rem tablet, 0.33rem mobile
- Maintained original hero text: "Bangladesh's Premier Automotive Service & Spare Parts Hub"
- Resolved mobile button clipping with ultra-compact typography and centered flex layout
- Final mobile hero title font size: 0.33rem for perfect button containment
- Fixed mobile header layout with optimized text wrapping and hamburger button positioning
- Enhanced mobile navbar text utilization to minimize right-side gaps
- Adjusted contact FAB button positioning to prevent clipping across all device sizes
- Updated Toyota logo with authentic metallic brand emblem provided by user
- Added top padding to center Toyota logo vertically in carousel
- Removed lazy loading feature to eliminate clunky red loading bar appearing every few seconds
- Removed custom red scrollbar styling that was causing the red progress bar at bottom of screen
- Removed "Trusted by Leading Organizations" section with corporate client logos carousel
- Fixed blinking horizontal scrollbar by removing leftover brands animation CSS and adding overflow-x: hidden
- Redesigned automotive brands section with professional Bootstrap carousel layout
- Added responsive design with uniform logo sizing (80px desktop, 60px mobile)
- Implemented smooth transitions and hover effects for brand logos