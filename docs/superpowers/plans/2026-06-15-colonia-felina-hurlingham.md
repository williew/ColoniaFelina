# Colonia Felina Hurlingham — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir una página web estática de una sola página (scroll) para promocionar la adopción de la Colonia Felina Hurlingham, con secciones de Hero+KPIs, TNVR, Galería, Adopción/Socialización y Contacto.

**Architecture:** Una sola página `index.html` con menú fijo y anclas a cada sección. CSS en `css/styles.css` y JS ligero en `js/main.js` para contadores animados, scroll suave y galería con lightbox. Las fotos se organizan en subcarpetas bajo `images/`.

**Tech Stack:** HTML5 semántico, CSS3 (variables, grid, flexbox, media queries), JavaScript vanilla (sin frameworks). Sin dependencias externas salvo Google Fonts (Inter).

---

## File Map

| Archivo | Responsabilidad |
|---------|----------------|
| `index.html` | Estructura completa de la página única |
| `css/styles.css` | Todo el CSS: variables, reset, nav, secciones, galería, lightbox, responsive |
| `js/main.js` | Scroll suave, highlight de nav activo, contadores animados KPI, lightbox galería |
| `images/comiendo/` | Fotos de los gatos comiendo (usuario pone las reales aquí) |
| `images/sol/` | Fotos tomando sol |
| `images/descansando/` | Fotos descansando |
| `images/gatitos/` | Fotos de gatitos |
| `images/jaula/` | Fotos durante captura/jaula |

---

### Task 1: Estructura de directorios y placeholders

**Files:**
- Create: `images/comiendo/.gitkeep`
- Create: `images/sol/.gitkeep`
- Create: `images/descansando/.gitkeep`
- Create: `images/gatitos/.gitkeep`
- Create: `images/jaula/.gitkeep`
- Create: `css/styles.css` (vacío por ahora)
- Create: `js/main.js` (vacío por ahora)

- [ ] **Step 1: Crear carpetas de imágenes**

```bash
mkdir -p images/comiendo images/sol images/descansando images/gatitos images/jaula
touch images/comiendo/.gitkeep images/sol/.gitkeep images/descansando/.gitkeep images/gatitos/.gitkeep images/jaula/.gitkeep
mkdir -p css js
touch css/styles.css js/main.js
```

- [ ] **Step 2: Verificar estructura**

```bash
find . -not -path './.superpowers/*' -not -path './docs/*' | sort
```

Esperado:
```
./css/styles.css
./images/comiendo/.gitkeep
./images/descansando/.gitkeep
./images/gatitos/.gitkeep
./images/jaula/.gitkeep
./images/sol/.gitkeep
./js/main.js
```

- [ ] **Step 3: Commit**

```bash
git init
git add .
git commit -m "chore: scaffold project structure"
```

---

### Task 2: HTML — estructura completa de index.html

**Files:**
- Create: `index.html`

- [ ] **Step 1: Crear index.html con todas las secciones**

Crear `index.html` con el siguiente contenido completo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Colonia Felina Hurlingham — Rescatamos, esterilizamos, vacunamos y buscamos hogares para gatos urbanos. Adoptá, colaborá o difundí.">
  <title>Colonia Felina Hurlingham</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

  <!-- NAV -->
  <header class="nav-wrapper">
    <nav class="nav container">
      <a href="#inicio" class="nav-logo">🐾 Colonia Felina Hurlingham</a>
      <button class="nav-toggle" aria-label="Abrir menú" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#tnvr">TNVR</a></li>
        <li><a href="#fotos">Fotos</a></li>
        <li><a href="#adoptar">Adoptar</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <a href="#contacto" class="btn btn-nav">Adoptá →</a>
    </nav>
  </header>

  <main>

    <!-- HERO -->
    <section id="inicio" class="hero">
      <div class="container hero-inner">
        <div class="label">Colonia felina · Hurlingham, Buenos Aires</div>
        <h1>12 gatos esperan<br>una oportunidad</h1>
        <p class="tagline">Los rescatamos. Los cuidamos. Los amamos.<br>Ahora necesitan un hogar.</p>
        <div class="hero-btns">
          <a href="#contacto" class="btn btn-primary">Quiero adoptar →</a>
          <a href="#tnvr" class="btn btn-secondary">Conocé el TNVR</a>
        </div>

        <!-- KPIs -->
        <div class="kpis">
          <div class="kpi">
            <span class="kpi-num" data-target="7" style="color: var(--violet)">0</span>
            <span class="kpi-label">gatos<br>adoptados</span>
          </div>
          <div class="kpi">
            <span class="kpi-num" data-target="12" style="color: var(--amber)">0</span>
            <span class="kpi-label">buscan<br>hogar</span>
          </div>
          <div class="kpi">
            <span class="kpi-num" data-target="8" style="color: var(--green)">0</span>
            <span class="kpi-label">castrados<br>y vacunados</span>
          </div>
          <div class="kpi">
            <span class="kpi-num" data-target="4" style="color: var(--red)">0</span>
            <span class="kpi-label">pendientes<br>de castrar</span>
          </div>
        </div>

        <!-- PHOTO STRIP -->
        <div class="photo-strip" id="hero-strip">
          <!-- JS popula con imágenes de images/comiendo, images/sol, etc. -->
          <!-- Fallback si no hay imágenes -->
          <div class="photo-placeholder">🐱</div>
          <div class="photo-placeholder">🐈</div>
          <div class="photo-placeholder">😸</div>
          <div class="photo-placeholder">🐾</div>
          <div class="photo-placeholder">🐈‍⬛</div>
        </div>
      </div>
    </section>

    <!-- TNVR -->
    <section id="tnvr" class="section-tnvr">
      <div class="container">
        <div class="label">El método que usamos</div>
        <h2>¿Qué es el TNVR?</h2>
        <p class="section-desc">
          <strong>TNVR</strong> son las siglas en inglés de <em>Trap, Neuter, Vaccinate, Return</em> —
          en español: <strong>Atrapar, Esterilizar, Vacunar y Retornar</strong>. Es el método más efectivo
          y humano para controlar poblaciones felinas urbanas, reconocido por organizaciones internacionales
          de bienestar animal como la ASPCA y Alley Cat Allies.
        </p>

        <div class="tnvr-steps">
          <div class="tnvr-step">
            <div class="step-icon">🪤</div>
            <div class="step-eng">Trap</div>
            <div class="step-esp">Atrapar</div>
            <p>Capturamos los gatos con trampas humanitarias, sin causarles daño ni estrés innecesario.</p>
          </div>
          <div class="tnvr-step">
            <div class="step-icon">✂️</div>
            <div class="step-eng">Neuter</div>
            <div class="step-esp">Esterilizar</div>
            <p>Los esterilizamos para frenar la reproducción y mejorar su salud y comportamiento.</p>
          </div>
          <div class="tnvr-step">
            <div class="step-icon">💉</div>
            <div class="step-eng">Vaccinate</div>
            <div class="step-esp">Vacunar</div>
            <p>Los vacunamos contra rabia y otras enfermedades para protegerlos a ellos y a la comunidad.</p>
          </div>
          <div class="tnvr-step">
            <div class="step-icon">🏡</div>
            <div class="step-eng">Return</div>
            <div class="step-esp">Retornar</div>
            <p>Los liberamos en su territorio, donde los seguimos alimentando y monitoreando.</p>
          </div>
        </div>

        <div class="ear-tip">
          <div class="ear-tip-icon">✂️🐱</div>
          <div class="ear-tip-text">
            <strong>La marca universal: el corte de oreja</strong>
            Como símbolo universal para identificar a un gato que ya pasó por el proceso TNVR,
            se le realiza un pequeño corte en la punta de la oreja izquierda mientras está bajo
            anestesia. Es indoloro, permanente y reconocido a nivel mundial. Gracias a esta marca,
            el gato nunca será capturado ni estresado innecesariamente en el futuro.
          </div>
        </div>

        <p class="sources">
          Fuentes: <a href="https://www.alleycat.org" target="_blank" rel="noopener">Alley Cat Allies</a> ·
          <a href="https://www.aspca.org" target="_blank" rel="noopener">ASPCA</a> ·
          <a href="https://www.woah.org" target="_blank" rel="noopener">Organización Mundial de Sanidad Animal (OMSA)</a>
        </p>
      </div>
    </section>

    <!-- GALERÍA -->
    <section id="fotos" class="section-gallery">
      <div class="container">
        <div class="label">La colonia en fotos</div>
        <h2>Conocelos</h2>
        <p class="section-desc">Fotos reales de nuestra colonia — comiendo, tomando sol, descansando y durante las capturas para su cuidado.</p>

        <div class="gallery-filters">
          <button class="filter-btn active" data-filter="all">Todos</button>
          <button class="filter-btn" data-filter="comiendo">Comiendo</button>
          <button class="filter-btn" data-filter="sol">Tomando sol</button>
          <button class="filter-btn" data-filter="descansando">Descansando</button>
          <button class="filter-btn" data-filter="gatitos">Gatitos</button>
          <button class="filter-btn" data-filter="jaula">Captura</button>
        </div>

        <div class="gallery-grid" id="gallery-grid">
          <!-- Poblado por JS con imágenes reales de las carpetas, o placeholders si no hay -->
          <div class="gallery-item" data-category="comiendo">
            <div class="gallery-placeholder" style="background: #f59e0b">🍽️<span>Comiendo</span></div>
          </div>
          <div class="gallery-item" data-category="sol">
            <div class="gallery-placeholder" style="background: #f97316">☀️<span>Tomando sol</span></div>
          </div>
          <div class="gallery-item" data-category="descansando">
            <div class="gallery-placeholder" style="background: #8b5cf6">😴<span>Descansando</span></div>
          </div>
          <div class="gallery-item" data-category="gatitos">
            <div class="gallery-placeholder" style="background: #ec4899">🐱<span>Gatitos</span></div>
          </div>
          <div class="gallery-item" data-category="jaula">
            <div class="gallery-placeholder" style="background: #6b7280">🔒<span>Captura</span></div>
          </div>
          <div class="gallery-item" data-category="sol">
            <div class="gallery-placeholder" style="background: #10b981">🌿<span>En libertad</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ADOPTAR -->
    <section id="adoptar" class="section-adopt">
      <div class="container">
        <div class="label">Adoptá un compañero</div>
        <h2>Dale un hogar,<br>cambiá dos vidas</h2>
        <p class="section-desc">Algunos toleran el contacto desde el primer día. Otros necesitan tiempo. Todos merecen amor.</p>

        <div class="adopt-cards">
          <div class="adopt-card">
            <div class="adopt-card-icon">😺</div>
            <h3>Listos para el contacto</h3>
            <p>Ya toleran el acercamiento humano. Ideales para hogares con experiencia con gatos.</p>
          </div>
          <div class="adopt-card">
            <div class="adopt-card-icon">🌱</div>
            <h3>Necesitan tiempo</h3>
            <p>Con paciencia y el proceso de socialización adecuado, florecen en semanas o meses. El vínculo que se forma es único.</p>
          </div>
        </div>

        <div class="socialization">
          <h3>¿Cómo es el proceso de socialización?</h3>
          <p>Integrar un gato de colonia al hogar requiere paciencia y un espacio seguro. El proceso típico tiene estas etapas:</p>
          <ol>
            <li><strong>Habitación propia y tranquila</strong> los primeros días — sin ruidos fuertes ni visitas</li>
            <li><strong>Sin forzar el contacto</strong> — dejá que él se acerque en sus tiempos</li>
            <li><strong>Juego a distancia</strong> con varitas y plumas para generar confianza sin presión física</li>
            <li><strong>Premios y comida</strong> para asociar tu presencia a algo positivo</li>
            <li><strong>Paciencia total</strong>: el proceso puede llevar entre 2 semanas y 3 meses según el gato</li>
          </ol>
          <p>Adoptar de a dos gatos mejora notablemente la adaptabilidad — se acompañan, se dan confianza y se estresan menos.</p>
          <p class="sources">
            Basado en:
            <a href="https://www.jacksongalaxy.com" target="_blank" rel="noopener">Jackson Galaxy Foundation</a> ·
            <a href="https://www.aspca.org/pet-care/cat-care/socializing-your-cat" target="_blank" rel="noopener">ASPCA — Socializing Your Cat</a> ·
            <a href="https://www.alleycat.org/resources/socialization-tips-for-feral-kittens" target="_blank" rel="noopener">Alley Cat Allies — Socialization Tips</a>
          </p>
        </div>
      </div>
    </section>

    <!-- CONTACTO -->
    <section id="contacto" class="section-contact">
      <div class="container">
        <div class="label">¿Querés ayudar?</div>
        <h2>Cada gato cuenta</h2>
        <p class="section-desc">Podés adoptar, colaborar en la socialización o simplemente compartir. Completá el formulario y te contactamos.</p>

        <div class="contact-grid">
          <div class="form-card">
            <h3>📋 Completá el formulario</h3>
            <p>Nos contás un poco sobre vos y tu hogar. Sin compromiso, con mucho amor.</p>
            <a href="https://forms.gle/M1fxo6MsNcmR37h48" target="_blank" rel="noopener" class="btn btn-primary btn-large">
              Ir al formulario →
            </a>
          </div>
          <div class="ways-to-help">
            <h3>Otras formas de colaborar</h3>
            <ul>
              <li>🍽️ <strong>Alimentación</strong> — ayudanos a cubrir la comida diaria de la colonia</li>
              <li>🤝 <strong>Socialización</strong> — pasá tiempo con los gatos para ayudarlos a confiar en humanos</li>
              <li>📢 <strong>Difusión</strong> — compartí esta página y nuestras redes para llegar a más personas</li>
              <li>💰 <strong>Colaboración económica</strong> — las castraciones y vacunas tienen un costo real</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <p>🐾 <strong>Colonia Felina Hurlingham</strong> · Proyecto de rescate y bienestar animal</p>
      <p>TNVR · Esterilización · Vacunación · Adopción responsable</p>
    </div>
  </footer>

  <!-- LIGHTBOX -->
  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Foto ampliada">
    <button class="lightbox-close" id="lightbox-close" aria-label="Cerrar">✕</button>
    <img class="lightbox-img" id="lightbox-img" src="" alt="">
  </div>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Abrir index.html en el navegador y verificar que la estructura HTML cargue sin errores de consola**

Abrir `index.html` directamente con el navegador. Esperado: estructura visible, sin errores JS (solo habrá advertencias de imágenes faltantes, eso es esperado).

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add full HTML structure for single-page site"
```

---

### Task 3: CSS — estilos completos

**Files:**
- Modify: `css/styles.css`

- [ ] **Step 1: Escribir el CSS completo**

Escribir el siguiente contenido en `css/styles.css`:

```css
/* ===== VARIABLES ===== */
:root {
  --violet: #7c3aed;
  --violet-light: #ede9fe;
  --violet-dark: #5b21b6;
  --amber: #f59e0b;
  --green: #10b981;
  --red: #ef4444;
  --cream: #fff7ed;
  --bg: #faf9ff;
  --text: #1f2937;
  --text-muted: #6b7280;
  --border: #e5e7eb;
  --white: #ffffff;
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.06);
  --shadow-md: 0 4px 20px rgba(124,58,237,0.12);
  --radius: 12px;
  --radius-sm: 8px;
  --radius-pill: 24px;
}

/* ===== RESET ===== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body { font-family: 'Inter', 'Segoe UI', sans-serif; background: var(--bg); color: var(--text); line-height: 1.6; }
img { max-width: 100%; height: auto; display: block; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }

/* ===== CONTAINER ===== */
.container { max-width: 960px; margin: 0 auto; padding: 0 20px; }

/* ===== NAV ===== */
.nav-wrapper {
  position: sticky; top: 0; z-index: 200;
  background: var(--white);
  border-bottom: 2px solid var(--violet-light);
  box-shadow: var(--shadow-sm);
}
.nav {
  display: flex; align-items: center; gap: 20px;
  padding: 12px 20px; max-width: 960px; margin: 0 auto;
}
.nav-logo {
  font-weight: 900; font-size: 1rem; color: var(--violet);
  white-space: nowrap; flex-shrink: 0;
}
.nav-links {
  display: flex; gap: 20px; margin-left: auto;
}
.nav-links a {
  font-size: 0.875rem; color: var(--text-muted); font-weight: 600;
  transition: color 0.2s;
}
.nav-links a:hover, .nav-links a.active { color: var(--violet); }
.nav-toggle { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
.nav-toggle span { display: block; width: 22px; height: 2px; background: var(--text); border-radius: 2px; transition: 0.3s; }

/* ===== BUTTONS ===== */
.btn {
  display: inline-block; padding: 10px 22px; border-radius: var(--radius-pill);
  font-weight: 700; font-size: 0.875rem; cursor: pointer; transition: opacity 0.2s, transform 0.1s;
  border: none;
}
.btn:hover { opacity: 0.88; transform: translateY(-1px); }
.btn-primary { background: var(--violet); color: var(--white); }
.btn-secondary { border: 2px solid var(--violet); color: var(--violet); background: transparent; }
.btn-nav { background: var(--violet); color: var(--white); padding: 6px 16px; font-size: 0.8rem; flex-shrink: 0; }
.btn-large { padding: 14px 32px; font-size: 1rem; }

/* ===== LABELS & TYPOGRAPHY ===== */
.label {
  font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px;
  color: var(--violet); font-weight: 700; margin-bottom: 6px;
}
h1 { font-size: clamp(2rem, 5vw, 3rem); font-weight: 900; line-height: 1.15; margin-bottom: 12px; }
h2 { font-size: clamp(1.5rem, 3.5vw, 2.2rem); font-weight: 900; line-height: 1.2; margin-bottom: 10px; }
h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; }
.section-desc { font-size: 1rem; color: var(--text-muted); margin-bottom: 28px; max-width: 620px; line-height: 1.7; }
.tagline { font-size: 1rem; color: var(--violet); font-weight: 600; margin-bottom: 24px; line-height: 1.6; }
.sources { font-size: 0.78rem; color: #9ca3af; margin-top: 20px; }
.sources a { color: var(--violet); text-decoration: underline; }
.sources a:hover { color: var(--violet-dark); }

/* ===== HERO ===== */
.hero {
  background: linear-gradient(135deg, #f3e8ff 0%, #fff7ed 100%);
  padding: 64px 0 48px;
  text-align: center;
}
.hero-inner { display: flex; flex-direction: column; align-items: center; }
.hero-btns { display: flex; gap: 12px; justify-content: center; margin-bottom: 40px; flex-wrap: wrap; }

/* ===== KPIs ===== */
.kpis {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;
  width: 100%; max-width: 560px; margin-bottom: 32px;
}
.kpi {
  background: var(--white); border-radius: var(--radius); padding: 16px 8px;
  text-align: center; box-shadow: var(--shadow-sm);
}
.kpi-num {
  display: block; font-size: 2.2rem; font-weight: 900; line-height: 1;
}
.kpi-label {
  display: block; font-size: 0.72rem; color: var(--text-muted);
  margin-top: 4px; line-height: 1.4;
}

/* ===== PHOTO STRIP ===== */
.photo-strip {
  display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px;
  width: 100%; border-radius: var(--radius); overflow: hidden;
}
.photo-strip img {
  width: 100%; height: 100px; object-fit: cover; border-radius: var(--radius-sm);
  cursor: pointer; transition: transform 0.2s;
}
.photo-strip img:hover { transform: scale(1.04); }
.photo-placeholder {
  background: var(--violet-light); border-radius: var(--radius-sm);
  height: 100px; display: flex; align-items: center; justify-content: center;
  font-size: 2rem;
}

/* ===== SECTIONS base ===== */
.section-tnvr, .section-adopt { background: var(--white); padding: 72px 0; }
.section-gallery { background: var(--cream); padding: 72px 0; }
.section-contact { background: linear-gradient(135deg, #f3e8ff 0%, #fff7ed 100%); padding: 72px 0; }

/* ===== TNVR STEPS ===== */
.tnvr-steps {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin: 28px 0;
}
.tnvr-step {
  border: 2px solid var(--violet-light); border-radius: var(--radius);
  padding: 20px 14px; text-align: center;
}
.step-icon { font-size: 2rem; margin-bottom: 8px; }
.step-eng { font-size: 0.7rem; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px; }
.step-esp { font-size: 1rem; font-weight: 800; color: var(--violet); margin: 4px 0 8px; }
.tnvr-step p { font-size: 0.82rem; color: var(--text-muted); line-height: 1.5; }

/* EAR TIP */
.ear-tip {
  display: flex; align-items: flex-start; gap: 16px;
  background: #fff7ed; border-left: 4px solid var(--amber);
  border-radius: 0 var(--radius) var(--radius) 0;
  padding: 16px 20px; margin: 28px 0 0;
}
.ear-tip-icon { font-size: 2rem; flex-shrink: 0; margin-top: 2px; }
.ear-tip-text { font-size: 0.9rem; color: var(--text); line-height: 1.65; }
.ear-tip-text strong { display: block; font-size: 1rem; margin-bottom: 4px; color: var(--text); }

/* ===== GALLERY ===== */
.gallery-filters { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; }
.filter-btn {
  padding: 6px 16px; border-radius: var(--radius-pill);
  border: 2px solid var(--violet-light); background: var(--white);
  color: var(--text-muted); font-size: 0.82rem; font-weight: 600;
  cursor: pointer; transition: all 0.2s;
}
.filter-btn.active, .filter-btn:hover {
  background: var(--violet); color: var(--white); border-color: var(--violet);
}
.gallery-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;
}
.gallery-item { border-radius: var(--radius-sm); overflow: hidden; cursor: pointer; }
.gallery-item img {
  width: 100%; height: 180px; object-fit: cover;
  transition: transform 0.25s; border-radius: var(--radius-sm);
}
.gallery-item img:hover { transform: scale(1.04); }
.gallery-placeholder {
  height: 180px; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  font-size: 2.5rem; color: white; border-radius: var(--radius-sm);
  gap: 6px;
}
.gallery-placeholder span { font-size: 0.75rem; font-weight: 700; opacity: 0.9; }
.gallery-item.hidden { display: none; }

/* ===== ADOPT ===== */
.adopt-cards {
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 28px;
}
.adopt-card {
  border: 2px solid var(--violet-light); border-radius: var(--radius);
  padding: 24px 20px;
}
.adopt-card-icon { font-size: 2.2rem; margin-bottom: 12px; }
.adopt-card p { font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; }

.socialization {
  background: var(--violet-light); border-radius: var(--radius); padding: 24px 28px;
}
.socialization h3 { color: var(--text); margin-bottom: 10px; }
.socialization > p { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px; line-height: 1.6; }
.socialization ol { padding-left: 20px; }
.socialization ol li { font-size: 0.9rem; color: var(--text); line-height: 1.8; }
.socialization ol li strong { color: var(--violet); }

/* ===== CONTACT ===== */
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: start; }
.form-card {
  background: var(--white); border-radius: var(--radius); padding: 32px 28px;
  box-shadow: var(--shadow-md); text-align: center;
}
.form-card p { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 20px; line-height: 1.6; }
.ways-to-help h3 { margin-bottom: 16px; }
.ways-to-help li {
  font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;
  padding: 8px 0; border-bottom: 1px solid var(--border);
}
.ways-to-help li:last-child { border-bottom: none; }
.ways-to-help strong { color: var(--text); }

/* ===== FOOTER ===== */
.footer {
  background: var(--text); color: #9ca3af;
  padding: 24px; text-align: center; font-size: 0.82rem;
}
.footer p + p { margin-top: 4px; }
.footer strong { color: var(--white); }

/* ===== LIGHTBOX ===== */
.lightbox {
  display: none; position: fixed; inset: 0; z-index: 500;
  background: rgba(0,0,0,0.88); align-items: center; justify-content: center;
}
.lightbox.open { display: flex; }
.lightbox-img { max-width: 90vw; max-height: 85vh; border-radius: var(--radius); object-fit: contain; }
.lightbox-close {
  position: absolute; top: 20px; right: 24px;
  background: none; border: none; color: white;
  font-size: 2rem; cursor: pointer; line-height: 1;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .nav-links { display: none; flex-direction: column; position: absolute; top: 100%; left: 0; right: 0; background: var(--white); padding: 12px 20px 20px; border-bottom: 2px solid var(--violet-light); box-shadow: var(--shadow-sm); }
  .nav-links.open { display: flex; }
  .nav-toggle { display: flex; margin-left: auto; }
  .btn-nav { display: none; }
  .kpis { grid-template-columns: repeat(2, 1fr); }
  .photo-strip { grid-template-columns: repeat(3, 1fr); }
  .photo-strip .photo-placeholder:nth-child(n+4) { display: none; }
  .tnvr-steps { grid-template-columns: repeat(2, 1fr); }
  .adopt-cards { grid-template-columns: 1fr; }
  .contact-grid { grid-template-columns: 1fr; }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .hero { padding: 40px 0 32px; }
  .kpis { grid-template-columns: repeat(2, 1fr); }
  .tnvr-steps { grid-template-columns: 1fr 1fr; }
  .gallery-grid { grid-template-columns: 1fr 1fr; }
  .photo-strip { grid-template-columns: repeat(3, 1fr); }
}
```

- [ ] **Step 2: Recargar index.html en el navegador y verificar que los estilos apliquen correctamente**

Verificar: nav fijo visible, hero con gradiente crema/violeta, KPIs con colores correctos, secciones diferenciadas.

- [ ] **Step 3: Commit**

```bash
git add css/styles.css
git commit -m "feat: add complete CSS with responsive layout"
```

---

### Task 4: JavaScript — interactividad

**Files:**
- Modify: `js/main.js`

- [ ] **Step 1: Escribir main.js completo**

```js
document.addEventListener('DOMContentLoaded', () => {

  // ── NAV TOGGLE (mobile) ──────────────────────────────────────────────
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  toggle?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  // Cerrar al hacer click en un link
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // ── NAV ACTIVE LINK (scroll spy) ────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        active?.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => observer.observe(s));

  // ── KPI ANIMATED COUNTERS ────────────────────────────────────────────
  const kpiNums = document.querySelectorAll('.kpi-num[data-target]');
  const kpiObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      let current = 0;
      const step = Math.ceil(target / 30);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current;
        if (current >= target) clearInterval(timer);
      }, 40);
      kpiObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  kpiNums.forEach(el => kpiObserver.observe(el));

  // ── GALLERY FILTER ───────────────────────────────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('hidden', !match);
      });
    });
  });

  // ── LIGHTBOX ─────────────────────────────────────────────────────────
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  // Clicks en imágenes de galería y photo strip
  document.querySelectorAll('.gallery-item img, .photo-strip img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });
  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

  // ── PHOTO STRIP — carga dinámica desde manifest ──────────────────────
  // Si el usuario agrega un archivo images/manifest.json con la lista de fotos,
  // el strip se puebla automáticamente. Si no, los placeholders quedan visibles.
  loadPhotoStrip();

  async function loadPhotoStrip() {
    try {
      const res = await fetch('images/manifest.json');
      if (!res.ok) return; // sin manifest, usar placeholders
      const manifest = await res.json(); // { comiendo: ['file.jpg',...], sol: [...], ... }
      const strip = document.getElementById('hero-strip');
      strip.innerHTML = '';
      // Toma máximo 5 fotos del total para el strip (una por categoría si es posible)
      const categories = ['comiendo', 'sol', 'descansando', 'gatitos', 'jaula'];
      const picks = categories
        .flatMap(cat => (manifest[cat] || []).slice(0, 1).map(f => ({ src: `images/${cat}/${f}`, cat })))
        .slice(0, 5);
      picks.forEach(({ src, cat }) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Gato — ${cat}`;
        img.loading = 'lazy';
        img.addEventListener('click', () => openLightbox(img.src, img.alt));
        strip.appendChild(img);
      });
      // Poblar también galería con todas las fotos del manifest
      loadGallery(manifest);
    } catch (_) {
      // Sin manifest — placeholders siguen visibles, sin hacer nada
    }
  }

  function loadGallery(manifest) {
    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = '';
    const categories = ['comiendo', 'sol', 'descansando', 'gatitos', 'jaula'];
    categories.forEach(cat => {
      (manifest[cat] || []).forEach(file => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.category = cat;
        const img = document.createElement('img');
        img.src = `images/${cat}/${file}`;
        img.alt = `Gato — ${cat}`;
        img.loading = 'lazy';
        img.addEventListener('click', () => openLightbox(img.src, img.alt));
        item.appendChild(img);
        grid.appendChild(item);
      });
    });
  }

});
```

- [ ] **Step 2: Verificar en el navegador**

Recargar `index.html`. Verificar:
- Contadores KPI animan al llegar al hero
- Botón hamburguesa aparece y funciona en pantalla chica (reducir ventana)
- Filtros de galería muestran/ocultan ítems correctamente
- El link al formulario de contacto va a `https://forms.gle/M1fxo6MsNcmR37h48`

- [ ] **Step 3: Commit**

```bash
git add js/main.js
git commit -m "feat: add JS for nav, KPI counters, gallery filter and lightbox"
```

---

### Task 5: Manifest de imágenes

**Files:**
- Create: `images/manifest.json`

Este archivo le dice al JS cuáles fotos reales existen en cada carpeta. El usuario lo actualiza cuando agrega fotos.

- [ ] **Step 1: Crear manifest.json de ejemplo**

```json
{
  "comiendo": [],
  "sol": [],
  "descansando": [],
  "gatitos": [],
  "jaula": []
}
```

Guardar en `images/manifest.json`. Con todas las listas vacías, el sitio usa los placeholders.

- [ ] **Step 2: Documentar cómo agregar fotos**

Cuando el usuario quiera agregar fotos reales:
1. Copiar los archivos `.jpg`/`.png`/`.webp` a la carpeta correspondiente (ej: `images/comiendo/gato1.jpg`)
2. Actualizar `images/manifest.json` con los nombres de archivo:
```json
{
  "comiendo": ["gato1.jpg", "gato2.jpg"],
  "sol": ["sol1.jpg"],
  "descansando": [],
  "gatitos": ["gatitos1.jpg"],
  "jaula": ["captura1.jpg"]
}
```
3. Recargar el sitio — las fotos aparecen automáticamente en la galería y el strip del hero.

- [ ] **Step 3: Commit**

```bash
git add images/manifest.json
git commit -m "feat: add image manifest for dynamic gallery loading"
```

---

### Task 6: Revisión final y polish

**Files:** Ninguno nuevo — revisión visual.

- [ ] **Step 1: Verificar en desktop (ventana ancha)**

Abrir `index.html`. Revisar visualmente:
- [ ] Menú fijo se mantiene al hacer scroll
- [ ] KPIs animan correctamente al cargar la sección
- [ ] Sección TNVR: párrafo con definición + 4 recuadros + bloque ear-tip
- [ ] Galería: filtros funcionales, placeholders de colores
- [ ] Sección adoptar: dos tarjetas + bloque de socialización con fuentes
- [ ] Contacto: tarjeta con link al form + lista de formas de colaborar
- [ ] Footer correcto

- [ ] **Step 2: Verificar en mobile (ventana a 375px)**

Reducir el navegador a 375px de ancho. Verificar:
- [ ] Menú hamburguesa aparece, abre y cierra
- [ ] KPIs se muestran en grilla 2×2
- [ ] TNVR steps en grilla 2×2
- [ ] Galería en 2 columnas
- [ ] Tarjetas de adoptar apiladas verticalmente
- [ ] Formulario de contacto ocupa ancho completo

- [ ] **Step 3: Verificar link del formulario**

Hacer click en "Ir al formulario →". Debe abrir `https://forms.gle/M1fxo6MsNcmR37h48` en una pestaña nueva.

- [ ] **Step 4: Commit final**

```bash
git add .
git commit -m "chore: final review and structure verification"
```

---

## Checklist de spec coverage

| Requisito | Task |
|-----------|------|
| Una sola página con scroll y menú fijo | Task 2, 3 |
| Sección Home con hero, foto strip y KPIs | Task 2, 3, 4 |
| KPI: 7 adoptados, 12 por adoptar, 8 castrados, 4 pendientes | Task 2 |
| Sección TNVR con definición bilingüe y 4 pasos | Task 2, 3 |
| Bloque ear-tip (corte de oreja) | Task 2, 3 |
| Fuentes TNVR (Alley Cat Allies, ASPCA, OMSA) | Task 2 |
| Galería con fotos por categoría y filtros | Task 2, 3, 4, 5 |
| Sección adoptar: tipos de gatos + proceso socialización | Task 2, 3 |
| Fuentes socialización (Jackson Galaxy, ASPCA, Alley Cat Allies) | Task 2 |
| Sección contacto con link a Google Form | Task 2, 3 |
| Otras formas de colaborar | Task 2 |
| Diseño responsive mobile-friendly | Task 3 |
| Carga dinámica de fotos vía manifest | Task 4, 5 |
| Nombre: Colonia Felina Hurlingham | Task 2 |
