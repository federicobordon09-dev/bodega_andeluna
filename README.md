# 🍷 Bodega Andeluna — Website Redesign

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=cssmodules&logoColor=white)
![next-intl](https://img.shields.io/badge/next--intl-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Embla Carousel](https://img.shields.io/badge/Embla_Carousel-00C4A0?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+)
![PhotoSwipe](https://img.shields.io/badge/PhotoSwipe-FFD700?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgM2g2djZNMTUgMjFoNnYtNk05IDNIM3Y2TTkgMjFIM3YtNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

> ⚠️ **Aviso:** Este proyecto NO es la página oficial de Bodega Andeluna. Es un proyecto personal y de portafolio creado con fines educativos y de demostración. Busca replantear y mejorar el diseño del sitio oficial, replicando sus datos reales con una estética moderna de lujo.

---

## 📖 Sobre el proyecto

Reimaginación completa del sitio web de **Bodega Andeluna**, una bodega de vinos de alta montaña ubicada en Gualtallary, Valle de Uco, Mendoza, Argentina. El sitio fue diseñado con una estética **Luxury Editorial Oscuro**: paleta oscura cálida, tipografía imponente, animaciones sutiles y una experiencia inmersiva que evoca pararse frente a los Andes con una copa de Malbec en la mano.

**No se utilizó** Tailwind CSS, Bootstrap ni ninguna librería de componentes UI. Todo el estilo es artesanal con CSS Modules.

---

## ✨ Funcionalidades

### 🏠 Home (`/`)
- **Hero slider** con 6 slides (Embla Carousel + Autoplay)
- **Estadísticas animadas** (+1.300 msnm, 70 ha, +30 países, 2003)
- **Historia** con layout asimétrico y parallax
- **Vinos destacados** en carrusel automático (12 vinos)
- **Experiencias** con cards de overlay
- **Premios** — Tim Atkin 96pts, Decanter Oro, Luxury Lifestyle Awards
- **Lodge teaser** con rating 9.6/10
- Grid de Instagram + CTA banner con link a Booking

### 🍇 Catálogo de vinos (`/vinos`)
32 vinos organizados en 6 líneas + edición especial con jerarquía visual.

### 🏛️ Bodega (`/bodega`)
Historia, terroir, filosofía, arquitectura, equipo, certificaciones ISO y mapa interactivo.

### 🍽️ Experiencias (`/experiencias`)
6 experiencias: Restaurante, Juego de Blend, Tardecitas, La Montaña en una Copa, Degustación Ed. Limitada, Vino y Chocolate.

### 🏡 Lodge (`/lodge`)
Andeluna Winery Lodge con galería de imágenes, amenities, rating 9.6/10 y CTA a Booking.

### 📬 Contacto (`/contacto`)
Formulario con honeypot anti-spam, validación, cooldown, datos reales de contacto y mapa.

### 📰 Prensa (`/prensa`)
6 artículos de prensa con títulos, descripciones y enlaces.

### 🌍 Internacionalización
- 3 idiomas: **Español**, **Inglés**, **Portugués**
- Selector de idioma en el navbar
- Contenido 100% traducido: hero, secciones, páginas, formulario, footer, cards

### 🧩 Componentes UI
| Componente | Descripción |
|---|---|
| **Navbar** | Mega-menú de vinos, selector de idioma, CTA "Reservar" |
| **Footer** | 4 columnas, datos reales, redes sociales y tienda |
| **LoadingScreen** | Splash screen con spinner dorado |
| **AnimatedSection** | IntersectionObserver con fade-in al scroll |
| **WineCard** | Botella con drop-shadow animado |
| **ExperienceCard** | Overlay de imagen con gradientes |
| **ContactForm** | Honeypot anti-spam, validación, cooldown |
| **PhotoSwipeGallery** | Lightbox para galería de imágenes |

---

## 🛠 Stack tecnológico

| Tecnología | Uso |
|---|---|
| **Next.js 16** | Framework con App Router |
| **TypeScript** | Tipado estricto en toda la codebase |
| **CSS Modules** | Estilos por componente + `globals.css` |
| **next-intl** | Internacionalización (ES / EN / PT) |
| **Embla Carousel** | Hero slider y carrusel de vinos |
| **PhotoSwipe** | Lightbox de imágenes |
| **next/font** | Cormorant Garamond, Raleway, Playfair Display |

---

## 📊 Datos reales incluidos

Todos los datos del sitio son reales de Bodega Andeluna:

- **32 vinos** — Pasionado, Altitud, 1300, Raíces, Emblema, Francs + Edición Especial
- **6 experiencias** gastronómicas y de cata
- **Lodge** — 8 lodges independientes, 42–45 m², solo adultos, rating 9.6/10
- **Contacto** — RP89 Km 11, Tupungato, Mendoza. Teléfonos, emails y horarios reales
- **Premios** — Tim Atkin 96pts, Decanter Oro, Luxury Lifestyle Awards 2023

---

## 🏆 Créditos

- **Bodega Andeluna** — Datos reales de la bodega (sin afiliación)
- Diseño web conceptual con estética **Luxury Editorial**
- Creado como proyecto de portafolio y demostración técnica

---

<p align="center">
  <i>Next.js 16 · TypeScript · CSS Modules · next-intl</i>
</p>
