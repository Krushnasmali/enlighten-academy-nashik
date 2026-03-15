# Vidya Mandir — Educational Institute Website

A complete, modern React.js frontend for an educational institute. Built with Vite, Framer Motion, AOS animations, and a clean Navy + Gold design system.

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ installed
- npm or yarn

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Then open your browser at **http://localhost:5173**

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / Navbar.css       ← Sticky responsive navbar with dropdown
│   ├── Banner.jsx / Banner.css       ← Auto-sliding full-width hero carousel
│   ├── CourseCard.jsx / CourseCard.css ← Hover-expand course cards
│   └── Footer.jsx / Footer.css       ← Full footer with map embed
│
├── pages/
│   ├── Home.jsx / Home.css           ← Full home page with all sections
│   ├── Courses.jsx / Courses.css     ← Filterable courses grid
│   ├── Activities.jsx / Activities.css ← Events & activities gallery
│   ├── About.jsx / About.css         ← About, team, timeline, methodology
│   ├── Contact.jsx / Contact.css     ← Contact form + Google Maps
│   ├── Login.jsx                     ← Login page (uses Auth.css)
│   ├── Register.jsx                  ← Register page (uses Auth.css)
│   └── Auth.css                      ← Shared styles for auth pages
│
├── styles/
│   └── global.css                    ← CSS variables, utilities, global styles
│
├── App.jsx                           ← Routes setup
└── main.jsx                          ← App entry point
```

---

## 🎨 Design System

| Token              | Value           |
|--------------------|-----------------|
| `--navy`           | `#0d1b3e`       |
| `--gold`           | `#c9922a`       |
| `--gold-light`     | `#e8b84b`       |
| `--cream`          | `#fdf8f0`       |
| `--font-display`   | Playfair Display|
| `--font-sans`      | DM Sans         |

---

## 🗺️ Pages

| Route          | Page            |
|----------------|-----------------|
| `/`            | Home            |
| `/courses`     | Courses         |
| `/activities`  | Activities      |
| `/about`       | About           |
| `/contact`     | Contact         |
| `/login`       | Login           |
| `/register`    | Register        |

---

## 🔧 Customisation

### Replace Placeholder Images
Search for `images.unsplash.com` URLs in the JSX files and replace with your own image paths or URLs.

### Replace Google Maps Embed
In `Contact.jsx` and `Footer.jsx`, find the `<iframe>` with `maps.google.com/maps/embed` and replace the `src` with your own embed URL from [Google Maps](https://maps.google.com).

### Update Institute Details
- Name, address, phone, email → search for "Vidya Mandir" and "Pune" across all files
- Course data → edit the arrays in `Courses.jsx` and `Home.jsx`
- Team members → edit the `team` array in `About.jsx`

### YouTube Videos
In `Home.jsx`, find the videos array and replace the `id` values with your YouTube video IDs.

---

## 📦 Dependencies

| Package           | Purpose                        |
|-------------------|--------------------------------|
| react-router-dom  | Client-side routing            |
| framer-motion     | Animation library (available)  |
| aos               | Animate on scroll              |
| react-icons       | Icon library (FA, MD, etc.)    |
| swiper            | Slider (available for use)     |

---

## 📱 Responsive Breakpoints

| Breakpoint | Devices             |
|------------|---------------------|
| `< 640px`  | Mobile              |
| `640–1024px`| Tablet / small laptop |
| `> 1024px` | Desktop & large screens |

---

Built with ❤️ for Vidya Mandir Institute of Excellence.
