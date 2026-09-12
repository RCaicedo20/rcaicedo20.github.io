# Design System

## General style

The portfolio should feel:

- Professional
- Clean
- Forward-looking

## Theme

Initial theme: Dark mode

A light mode may be added in a future version.

## Colors

Background: #0F1115
Surface / Cards: #171A21
Primary Text: #F4F4F5
Muted Text: #A1A1AA

Primary Accent: #D84040
Primary Accent Hover: #F05A5A

Secondary Accent: #F59E0B

Optional Functional Accent: #60A5FA

## Typography

- Heading font: Space Grotesk
- Body font: Inter

## Typography Scale

Hero Name:
4rem desktop
2.5rem mobile

Section Headings:
2.25rem desktop
1.75rem mobile

Card Titles:
1.25rem

Body Text:
1rem

Small / Muted Text:
0.875rem

## Spacing

XS: 0.5rem
SM: 1rem
MD: 1.5rem
LG: 2rem
XL: 3rem
2XL: 5rem
3XL: 6rem

## Borders / effects

Small: 8px

Cards: 12px

Large containers: 16px

## Buttons

Primary Button:

- Red background
- Light text
- 8px border radius
- Padding: SM vertically, MD horizontally
- Hover: brighter red + slight upward movement
- Focus: visible outline

Secondary Button (For V1):

- Transparent background
- Light text
- Subtle border
- 8px border radius
- Hover: accent-colored border/text
- Focus: visible outline

## Cards

Base Card:

- Dark surface
- Strong border
- 12px border radius
- 1.5rem padding

Hover:

- Slight upward movement
- Border becomes more visible
- Smooth transition

Expanded (For V1):

- Increased size
- Full details shown
- Stronger visual emphasis

## Focus States

- Must be clearly visible
- Should not rely only on color
- Use a visible outline
- Orange can be used as the focus accent

## Icons

- Light/muted by default
- Accent color on hover
- Slight scale increase
- Visible keyboard focus

## Motion

Fast interactions:

- 0.2s–0.3s
- Used for hover, color changes, icon scaling

Standard interactions:

- 0.3s–0.5s
- Used for buttons and card emphasis

Large state changes:

- 0.5s
- Used for expandable cards and mobile navigation

## Accessibility

Reduced Motion:

- Respect users who prefer reduced motion
- Disable or minimize non-essential animations when appropriate

## Layout

Page Container:

- Maximum width: 1200px
- Width: 90%
- Centered horizontally

Horizontal Padding:

- Mobile: 1rem
- Tablet: 2rem
- Desktop: 0

Major Section Spacing:

- Determined by content and section layout
- Maintain clear visual separation between sections

Text-heavy Content:

- Use a narrower readable width where appropriate
- Avoid excessively long text lines

Responsive Layout:

- Desktop may use multiple columns
- Mobile content stacks vertically
- Layout should adapt without horizontal scrolling

## Navbar Layout

Style:

- Fixed
- Centered
- Floating rounded rectangle
- Space around it from the viewport edges
- Dark surface distinct from the page background

Desktop:

- Navigation links visible
- Content arranged horizontally

Mobile:

- Compact floating navbar
- Burger button
- Navigation opens from the navbar
- Menu closes after a navigation link is selected

Visual behavior:

- Soft rounded corners
- Must remain clearly readable over every section
