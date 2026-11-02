# Intokozo Yemfundo Project - WEDE5020 Part 3

Student: ST10512787 Owethu
Tagline: Bringing Joy to Education

## Project Overview
Website for a Nonprofit / NPO established in 2005, offers Maths, English, Life Skills, Spelling Bee competition.
The organization was founded to empower township learners in Soweto through educational programs.

## What I Fixed From Part 1 Feedback (For Part 2)
- Added inline styles with `style="background-color: yellow;"` and `style="width: 400px; height: 400px;"` from all titles - fixed to `#000000`
- Added missing viewport `<meta>` tag, corrected div to border-box, initial to `100%` 
- **Moved all styling to external `css/style.css`**

## Part 2 Requirements and Fixes (What you already did)
- Typography: Bungee for font family, responsive font sizes (12px from 8px, flexbox, etc.)
- Layout: Flexbox for header/nav, grid for programs and gallery grid
- Responsive: Height, object-fit cover and screen fit

## Part 3 Improvements - What is NEW for Final POE

### 1. JavaScript Form Validation (Required)
- **Client-side validation:** Check if fields are empty before submission
- **Error Handling:** Display error message under each field if data is invalid or incomplete
- **AJAX Form Submission:** Form submits asynchronously using `e.preventDefault()` for improved user experience
- **Form action attribute:** Added `action="mailto:info@intokozoyemfundo.org.za"` to specify URL where form data will be sent

### 2. Interactive Features
- **About Page:** Added accordion for Our Impact section using `js/about.js`
- **Contact Page:** Replaced static iframe with interactive Leaflet.js map API showing Soweto location [-26.2489, 27.8546]
- **Enquiry Page:** Added cost and availability calculation

### 3. SEO and Image Optimisation
- Added `<meta name="description">`, `<meta name="keywords">`, viewport on all pages
- Renamed images from dated names like `2023-08-24 20.20.01.jpg` to descriptive SEO names like `township-learners-spelling-bee-2022.jpg`
- Added alt text for all images
- Added `sitemap.xml` and `robots.txt` in root folder

## Pages / Sitemap
- `Homepage.html` / `index.html` - Home page with mission
- `About Us.html` / `about.html` - About, mission, impact
- `Products and services.html` / `enquiry.html` - Featuring classes, cost calculation (R350 per learner sponsorship, R1500 spelling bee, R200 tutoring), availability display, compiled email
- `Gallery.html` - 8 images in responsive grid
- `News and Blogs.html` / `contact.html` - Updates, success stories, events, interactive map, Send us a Message form with Message Type field (General, Volunteering, Sponsorship, School Booking, Feedback) - REQUIRED

## Cost and Availability (New in Part 3)
- Volunteering: FREE - Always Available
- Sponsorship: R350 x number of learners - Available
- Spelling Bee Booking: R1500 fixed - Limited slots
- Tutoring Support: R200 x learners - Available Mon-Fri

## How to Run
Open `Homepage.html` or `index.html` in Chrome. No server needed. 
- CSS path is `css/style.css` 
- Images path is `images/`
- JS path is `js/` (new in Part 3)

For Live Server: Right-click index.html > Open with Live Server

## References (Updated for Part 3)
- Own organization photos - 2022 Spelling Bee event
- W3Schools - HTML form action attribute, CSS flexbox
- Leaflet.js Documentation - https://leafletjs.com/ - Interactive map API
- MDN Web Docs - JavaScript form validation, preventDefault()
- OpenStreetMap - Map tiles for Leaflet

## Changelog
### Part 3 - 02 November 2026
- NEW: Added `js/` folder with 3 files: `js/about.js`, `js/enquiry.js`, `js/contact.js`
- NEW: Added client-side validation, error handling with messages, AJAX submission
- NEW: Added form `action` attribute on all forms
- NEW: Added cost & availability calculation on enquiry page with compiled email preview
- NEW: Added interactive Leaflet map API on contact page
- NEW: Added Message Type required select field to contact form
- NEW: Added `sitemap.xml` and `robots.txt` for SEO
- NEW: Deployed to GitHub Pages
- FIX: Part 2 feedback - Removed remaining inline CSS, moved to external
- FIX: Image optimisation - Renamed to descriptive names, added alt attributes
- FIX: Added meta description and keywords

### Part 2
- Fixed inline styles: `background-color: yellow` changed to external CSS
- Added responsive design: width 100%, height auto, object-fit cover
- Moved all styling to external `css/style.css`
- Created 5 pages: Homepage, About, Products and Services, Gallery, News and Blogs
- Added responsive grid and flex layouts

### Part 1
- Project proposal and research
- Initial wireframes

## Deployment
- GitHub Pages link to be added after Settings > Pages enabled
- Netlify alternative: https://app.netlify.com/
