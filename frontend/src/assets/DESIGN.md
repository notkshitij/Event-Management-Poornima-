---
name: Academic Excellence System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#191c1e'
  on-tertiary-container: '#818486'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Work Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Work Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Work Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Work Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 48px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is built upon a foundation of **Corporate Modernism** with a focus on institutional authority and academic clarity. The visual language is intentionally restrained, prioritizing information density and ease of navigation for faculty, staff, and students. 

The aesthetic is characterized by a "quiet luxury"—conveying prestige through precise alignment, generous white space, and a rigorous adherence to a grayscale-heavy palette. It aims to evoke feelings of trust, stability, and intellectual focus. Interactions should feel deliberate and smooth, avoiding flashy animations in favor of functional transitions that reinforce the site's role as a reliable informational resource.

## Colors

The palette is anchored in a professional spectrum of neutrals. **Primary (#0F172A)** is a deep navy used for high-level branding, primary navigation backgrounds, and headings to provide a sense of weight. **Secondary (#334155)** serves as a structural accent for sub-navigation and icons.

**Tertiary (#F8FAFC)** acts as the "paper" of the digital experience, providing a subtle off-white background that reduces eye strain compared to pure white. The grayscale range (from Slate-50 to Slate-900) manages the content hierarchy, ensuring that the interface remains functional and "official" without the distraction of vibrant colors. High-contrast black is reserved strictly for body text to ensure maximum legibility.

## Typography

**Work Sans** is utilized across all levels of the system to maintain a unified, professional tone. Its grotesque characteristics provide a contemporary yet grounded feel that scales perfectly from dense data tables to large event headlines.

- **Headlines:** Use SemiBold (600) weights for clear section breaks. Large display titles should use a slight negative letter spacing to feel more "locked in" and authoritative.
- **Body:** Standard reading text should always use the `body-md` level for optimal accessibility.
- **Labels:** Small labels and metadata (like event dates or categories) use a slightly heavier weight and increased letter spacing to ensure they remain legible even at small sizes.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop screens to mirror the structured nature of academic journals. The content is centered within a 1280px container, utilizing a 12-column grid with 24px gutters.

- **Desktop:** 12 columns, 48px outside margins.
- **Tablet:** 8 columns, 32px outside margins.
- **Mobile:** 4 columns, 16px outside margins.

Spacing follows a strict 4px base unit. Vertical rhythm is maintained by using `stack-lg` for spacing between major sections and `stack-md` for spacing between elements within a group (e.g., a headline and its descriptive body text).

## Elevation & Depth

To maintain a professional and "flat" academic aesthetic, this design system avoids heavy drop shadows. Instead, it utilizes **Tonal Layers** and **Low-Contrast Outlines** to communicate hierarchy.

- **Surface Levels:** The primary background is the off-white Tertiary color. Elevated elements (like cards) use pure white (#FFFFFF).
- **Borders:** Subtle 1px borders in a light grey (#E2E8F0) are preferred over shadows to define container boundaries.
- **Interactive Depth:** Only upon interaction (hover/active) should a very soft, diffused ambient shadow be applied to indicate lift. Use a Slate-tinted shadow (e.g., `rgba(15, 23, 42, 0.08)`) with a 12px blur for these states.

## Shapes

The shape language is **Soft (0.25rem)**. This subtle rounding removes the harshness of sharp corners—making the UI feel modern—while maintaining enough geometric rigor to feel institutional and serious. 

- **Small Components:** Buttons, input fields, and tags use the base `rounded` (0.25rem) value.
- **Large Containers:** Content cards or modal windows may scale up to `rounded-lg` (0.5rem) to better frame larger blocks of information.
- **Strictness:** Do not use pill-shaped buttons; keeping a consistent corner radius across all elements reinforces the systematic, organized nature of the university.

## Components

### Buttons
- **Primary:** Solid Primary Navy background with White text. No gradients.
- **Secondary:** Ghost style with a Primary Navy 1px border and text.
- **Tertiary/Text:** Clean text-only buttons for low-priority actions like "Cancel" or "View All".

### Input Fields
Inputs use a white background with a Slate-200 border. On focus, the border thickens to 2px and changes to the Primary Navy color. Labels are always positioned above the field using `label-md`.

### Cards
Event cards should be minimal. Use a white background, a 1px Slate-200 border, and `rounded-lg` corners. Content should be padded by 24px on all sides. No shadow in the default state; a soft shadow on hover to indicate clickability.

### Lists & Data
For educational content, lists should use clear dividers (1px Slate-100). Use `body-md` for list items with consistent 16px vertical padding to ensure the interface remains "breathable" and easy to scan.

### Chips/Tags
Used for event categories (e.g., "Lecture," "Workshop"). Use a light Slate-100 background with Slate-700 text in `label-sm`. Avoid bright colors for tags to keep the focus on the textual information.