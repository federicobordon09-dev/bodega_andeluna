# Bodega Andeluna — Website Redesign

> **Avalo: Este proyecto NO es la página oficial de Bodega Andeluna.** Es un proyecto personal / portafolio creado con fines educativos y de demostración. Busca replantear y mejorar el diseño de la página oficial de la bodega, replicando sus datos reales (vinos, experiencias, lodge, contacto) con una estética moderna de lujo.

---

## Sobre el proyecto

Se trata de una reimagination completa del sitio web de **Bodega Andeluna**, una bodega de vinos de alta montaña ubicada en Gualtallary, Valle de Uco, Mendoza, Argentina. El sitio fue diseñado con una estética **Luxury Editorial Oscuro**: paleta oscura cálida, tipografía imponente, animaciones sutiles y una experiencia inmersiva que evoca pararse frente a los Andes con una copa de Malbec en la mano.

---

## Stack tecnológico

| Tecnología | Uso |
|-----------|-----|
| **Next.js 16** | Framework con App Router |
| **TypeScript** | Tipado estricto en todos los archivos |
| **CSS Modules** | Estilos por componente + `globals.css` global |
| **next-intl** | Internacionalización (ES / EN / PT) |
| **Embla Carousel** | Hero slider + carrusel de vinos |
| **PhotoSwipe** | Lightbox de galería de imágenes |
| **next/font** | Fuentes Google: Cormorant Garamond, Raleway, Playfair Display |

**No se utilizó:** Tailwind CSS, Bootstrap, ninguna librería de componentes UI.

---

## Funcionalidades

### Home (`/`)
- **Hero slider** con 6 slides (Embla Carousel + Autoplay): vinos, organic, Wine Not?, Torrontés, Lodge, Premios
- **Sección estadísticas** con contadores animados (+1.300 msnm, 70 ha, +30 países, 2003)
- **Historia** con layout asimétrico y parallax
- **Vinos destacados** en carrusel automático (12 vinos)
- **Experiencias** con cards de overlay
- **Premios y reconocimientos** (Tim Atkin 96pts, Decanter Oro, Luxury Lifestyle Awards)
- **Lodge teaser** con rating 9.6/10
- **Grid de Instagram**
- **CTA banner** con link a Booking

### Páginas interiores
- **`/vinos`** — Catálogo jerárquico de vinos: Línea Central → Altitud → 1300 → Raíces → Emblema → Francs + Edición Especial
- **`/bodega`** — Historia, Terroir, Filosofía, Arquitectura, Equipo, Certificaciones ISO + Mapa de Google
- **`/experiencias`** — 6 experiencias: Restaurante, Juego de Blend, Tardecitas, La Montaña en una Copa, Degustación Ed. Limitada, Vino y Chocolate
- **`/lodge`** — Andeluna Winery Lodge: galería, amenities, rating, CTA
- **`/contacto`** — Formulario con anti-spam, datos de contacto reales, mapa
- **`/prensa`** — 6 artículos de prensa con títulos y descripciones

### Internacionalización
- 3 idiomas: **Español**, **Inglés**, **Portugués**
- Selector de idioma en el navbar
- **TODO** el contenido se traduce: hero, secciones, páginas interiores, formulario, footer, cards

### Componentes UI
- **Navbar** con mega-menú de vinos, selector de idioma, CTA "Reservar"
- **Footer** con 4 columnas, datos reales, links a redes sociales y tienda
- **LoadingScreen** con spinner dorado
- **AnimatedSection** con IntersectionObserver (fade-in al scroll)
- **WineCard** con imagen de botella y drop-shadow
- **ExperienceCard** con overlay de imagen y gradientes
- **ContactForm** con honeypot anti-spam, validación, cooldown
- **PhotoSwipeGallery** para lightbox de imágenes

---

## Datos reales incluidos

Todos los datos del sitio son reales de Bodega Andeluna:

- **32 vinos** en 6 líneas: Pasionado, Altitud, 1300, Raíces, Emblema, Francs + Edición Especial
- **6 experiencias** gastronómicas y de cata
- **Lodge**: 8 lodges independientes, 42–45 m², solo adultos, rating 9.6/10
- **Contacto**: dirección real (RP89 Km 11, Tupungato), teléfonos, emails, horarios
- **Premios**: Tim Atkin 96pts, Decanter Oro, Luxury Lifestyle Awards 2023

---

## Créditos

- **Bodega Andeluna** — Datos reales de la bodega (no afiliado)
- Diseño web conceptual con estética Luxury Editorial
- Creado como proyecto de portafolio / demostración

---

*Proyecto: Bodega Andeluna Redesign · Next.js 16 + TypeScript + CSS Modules + next-intl*
