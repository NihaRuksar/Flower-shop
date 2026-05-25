<div align="center">

```
╔══════════════════════════════════════════╗
║                                          ║
║        🌸  BLOOM & PETAL STUDIO  🌸      ║
║                                          ║
║    Fresh Flowers. Thoughtfully Designed. ║
║                                          ║
╚══════════════════════════════════════════╝
```

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Motion-11-FF0055?style=flat-square&logo=framer)](https://motion.dev)

*A boutique floral e-commerce experience — where every pixel blooms.*

</div>

---

## 🌿 About

**Bloom & Petal Studio** is a modern, fully responsive floral shop web application built for artisan florists who believe presentation matters as much as the petals themselves. Cinematic hero sections, smooth animations, and a curated product experience — designed to feel like stepping into a high-end flower boutique.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 **Cinematic Hero** | Full-viewport hero with floating ambient glows and split-layout composition |
| 🛍️ **Shop & Filter** | Category-based product filtering with animated grid transitions |
| 💛 **Wishlist** | Persistent wishlist with localStorage sync across browser tabs |
| 📱 **Fully Responsive** | Pixel-perfect on mobile, tablet, and desktop |
| 🎞️ **Smooth Animations** | Page transitions, scroll reveals, and hover micro-interactions via Framer Motion |
| 📬 **Contact Page** | Custom enquiry form for weddings & event bookings |
| 🕓 **Order History** | Track past orders in a clean timeline view |

---

## 🗂️ Project Structure

```
floral-website/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   └── SectionHeader.tsx
│   ├── context/
│   │   └── WishlistContext.tsx   # Global wishlist state
│   ├── data/
│   │   └── products.ts           # Product catalogue
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Shop.tsx
│   │   ├── Wishlist.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── OrderHistory.tsx
│   ├── types.ts                  # Shared TypeScript interfaces
│   ├── App.tsx                   # Routes
│   └── main.tsx
├── public/
├── index.html
├── tailwind.config.js
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18+`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/NihaRuksar/Flower-shop

# Navigate into the project
cd floral-website

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. 🌸

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to the `/dist` folder — ready to deploy anywhere.

---

## ☁️ Deployment

This project is optimised for **Vercel** (zero config):

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Click **Deploy** — done ✅

Also works perfectly on **Netlify**.

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `forest` | `#2D4A3E` | Primary text, buttons |
| `ivory` | `#FAF7F2` | Page background |
| `blush` | `#F2C4CE` | Accents, highlights |
| `beige` | `#E8DDD0` | Section backgrounds |
| `mauve` | `#A0789A` | Hover states |
| `brown` | `#6B5043` | Body text |

**Typography:** Serif for headings · Mono for labels · Sans for body

---

## 📦 Tech Stack

- **[React 18](https://react.dev)** — UI framework
- **[TypeScript](https://typescriptlang.org)** — Type safety
- **[Vite](https://vitejs.dev)** — Lightning-fast dev server & bundler
- **[Tailwind CSS](https://tailwindcss.com)** — Utility-first styling
- **[Framer Motion](https://motion.dev)** — Animations & transitions
- **[React Router v6](https://reactrouter.com)** — Client-side routing
- **[Lucide React](https://lucide.dev)** — Icon library

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

```bash
git checkout -b feature/your-feature
git commit -m "add: your feature"
git push origin feature/your-feature
```

---

## 📄 License

MIT © Bloom & Petal Studio

---

<div align="center">

*Made with 🌸 and a lot of attention to detail*

</div>
