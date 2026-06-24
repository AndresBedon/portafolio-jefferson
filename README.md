# Portafolio — Jefferson Bedón

Sitio estático (HTML + CSS + JS puro, sin frameworks ni build step).
Se puede publicar gratis en minutos. Aquí tienes 3 formas, de la más fácil a la más "pro".

---

## Opción 1 — Netlify Drop (la más rápida, sin cuenta)

1. Entra a **https://app.netlify.com/drop**
2. Arrastra esta carpeta completa (`portfolio`) a la página.
3. Listo — te da una URL pública al instante (algo como `nombre-random.netlify.app`).
4. Si quieres guardarlo permanentemente y poder editarlo después, crea una cuenta gratuita cuando te lo proponga (botón "Save and continue").
5. Para cambiar el nombre del sitio: Site settings → Change site name.

---

## Opción 2 — Vercel (lo que mencionaste)

Vercel no tiene "arrastrar y soltar" directo como Netlify — necesita que el proyecto esté en GitHub. Pasos:

1. Crea una cuenta gratis en **https://github.com** (si no tienes).
2. Crea un repositorio nuevo, por ejemplo `portafolio-jefferson`.
3. Sube los archivos de esta carpeta al repositorio (puedes arrastrarlos directo en la interfaz web de GitHub con "Add file → Upload files", sin necesidad de usar comandos git).
4. Entra a **https://vercel.com**, crea cuenta gratis con tu mismo GitHub.
5. Click en "Add New… → Project", selecciona el repositorio que subiste.
6. Framework Preset: elige **"Other"** (es HTML plano, no necesita build).
7. Click "Deploy". En menos de un minuto tienes tu URL `tuproyecto.vercel.app`.

---

## Opción 3 — GitHub Pages (gratis, ideal si ya usas GitHub)

1. Sube los archivos a un repositorio de GitHub (igual que en la Opción 2, pasos 1-3).
2. Ve a Settings → Pages dentro del repositorio.
3. En "Source" elige la rama `main` y carpeta `/ (root)`.
4. Guarda — en 1-2 minutos tu sitio estará en `tu-usuario.github.io/nombre-repo`.

---

## Antes de publicar — checklist rápido

- [ ] Revisa el archivo `assets/cv-jefferson-bedon.pdf` — es tu CV en formato Harvard. Reemplázalo si quieres actualizar el currículum descargable.
- [ ] Si consigues tu LinkedIn/GitHub definitivos, dime y te agrego los botones en la sección de contacto.
- [ ] El número de WhatsApp ya está enlazado (+593 99 059 6407) — pruébalo después de publicar.
- [ ] Si compras un dominio propio más adelante (ej. jeffersonbedon.dev), tanto Vercel como Netlify permiten conectarlo gratis desde su panel.

---

## Estructura del proyecto

```
portfolio/
├── index.html      ← todo el contenido y estructura
├── styles.css       ← diseño (tema "consola/esquemático técnico")
├── script.js        ← menú móvil + animaciones al hacer scroll
└── assets/
    ├── cv-jefferson-bedon.pdf
    └── favicon.svg
```

Para editar texto o agregar un proyecto nuevo, todo está en `index.html` dentro de bloques `<article class="project-card">` — puedes copiar/pegar uno y cambiar el contenido.
