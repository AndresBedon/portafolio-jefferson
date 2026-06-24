# Jefferson Bedón — Portafolio

Sitio personal de **Jefferson Bedón**, Desarrollador Full Stack con +6 años de experiencia construyendo sistemas web y móviles para los sectores público y privado en Ecuador — desde plataformas de comando y control hasta apps móviles con Flutter.

🔗 **Sitio en vivo:** [https://portafolio-jefferson.vercel.app/](#)
📄 **CV descargable:** disponible directamente en el sitio (sección Contacto)

---

## Sobre este proyecto

Portafolio construido desde cero como **sitio estático** — sin frameworks, sin build step, sin dependencias externas que instalar. Solo HTML, CSS y JavaScript puro, pensado para cargar rápido y ser fácil de mantener.

La dirección visual sigue un concepto de **"consola de sistema / esquemático técnico"**: paneles con corchetes de esquina, tipografía monoespaciada para datos, y una paleta azul marino con acentos cian — una referencia directa al tipo de software que desarrollo (plataformas de comando y control, dashboards, sistemas de monitoreo).

## Características

- **Diseño responsive** — de escritorio a móvil, sin scroll horizontal en ningún breakpoint
- **Animaciones al hacer scroll** — las secciones aparecen progresivamente al navegar
- **Contadores animados** — las estadísticas del hero cuentan desde 0 al entrar en pantalla
- **Contador "uptime" en vivo** — calcula en tiempo real los años/días de experiencia profesional
- **Carrusel de tecnologías** — franja con íconos de los frameworks y herramientas que uso, en loop infinito
- **Efecto de brillo interactivo** — las tarjetas de proyectos reaccionan al cursor
- **Accesible** — respeta `prefers-reduced-motion`, tiene foco visible por teclado y atributos ARIA donde corresponde
- **Sin dependencias** — cero `npm install`, cero frameworks de frontend

## Stack utilizado para construir el sitio

| Capa           | Tecnología                                            |
| -------------- | ----------------------------------------------------- |
| Estructura     | HTML5 semántico                                       |
| Estilos        | CSS3 (custom properties, Grid, Flexbox)               |
| Interactividad | JavaScript (vanilla, sin librerías)                   |
| Tipografía     | Space Grotesk · Inter · JetBrains Mono (Google Fonts) |
| Hosting        | Vercel (despliegue continuo desde este repositorio)   |

> Nota: este es el stack del _sitio del portafolio en sí_. El stack profesional completo (Angular, NestJS, Flutter, AWS, etc.) está documentado dentro del sitio, en la sección "Stack".

## Estructura del proyecto

```
portfolio/
├── index.html              # Estructura y contenido de todas las secciones
├── styles.css               # Sistema de diseño completo (tokens, layout, responsive)
├── script.js                 # Menú móvil, animaciones, contadores, efectos
├── README.md
└── assets/
    ├── cv-jefferson-bedon.pdf   # CV descargable
    ├── jefferson-photo.png      # Foto de perfil
    └── favicon.svg
```

## Ejecutar en local

No requiere instalación. Basta con servir los archivos estáticos:

```bash
git clone https://github.com/AndresBedon/portafolio-jefferson.git
cd portafolio
python3 -m http.server 8080
# abrir http://localhost:8080
```

(Cualquier servidor estático funciona — también puedes usar la extensión "Live Server" de VS Code.)

## Despliegue

Este repositorio está conectado a **Vercel** con despliegue continuo: cada `git push` a la rama `main` publica los cambios automáticamente en producción en menos de un minuto.

## Contacto

- **Email:** andresjbdj@gmail.com
- **WhatsApp:** +593 99 059 6407
- **Ubicación:** Quito, Ecuador

---

<sub>Construido sin frameworks pesados — solo HTML, CSS y JS.</sub>
