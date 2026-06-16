# Colonia Felina Hurlingham — CLAUDE.md

## Qué es este proyecto

Página web estática de una sola página para promocionar la adopción de la Colonia Felina Hurlingham (Buenos Aires). Sin frameworks, sin dependencias de build. HTML + CSS + JS vanilla.

## Estructura

```
index.html          # Página principal (única)
css/styles.css      # Todo el CSS (variables, layout, responsive)
js/main.js          # JS: nav mobile, KPI counters, filtros galería, lightbox
comiendo/           # Fotos de los gatos comiendo
tomandosol/         # Fotos tomando sol
descansando/        # Fotos descansando
gatitos/            # Fotos de gatitos
Jaula/              # Fotos durante capturas para castración
```

## Secciones de la página

| Ancla | Contenido |
|-------|-----------|
| `#inicio` | Hero con KPIs animados y photo strip |
| `#tnvr` | Explicación del método TNVR (bilingüe) + corte de oreja |
| `#fotos` | Galería con filtros por categoría y lightbox |
| `#adoptar` | Tipos de gato + proceso de socialización con fuentes |
| `#contacto` | Link a Google Form + formas de colaborar |

## KPIs (actualizar en index.html)

Los contadores están en los atributos `data-target` de `.kpi-num`:

```html
<span class="kpi-num" data-target="7">   <!-- adoptados -->
<span class="kpi-num" data-target="12">  <!-- buscan hogar -->
<span class="kpi-num" data-target="8">   <!-- castrados -->
<span class="kpi-num" data-target="4">   <!-- pendientes de castrar -->
```

## Agregar fotos

1. Copiar el archivo a la carpeta correspondiente (`comiendo/`, `tomandosol/`, `descansando/`, `gatitos/`, `Jaula/`)
2. Agregar un `<div class="gallery-item" data-category="...">` en `index.html` dentro de `#gallery-grid`
3. Para el photo strip del hero, editar las 5 imágenes dentro de `.photo-strip`

## Google Form

Link: `https://forms.gle/M1fxo6MsNcmR37h48` — aparece en la sección `#contacto`. Para cambiarlo, buscar ese URL en `index.html`.

## Correr localmente

```bash
python -m http.server 7373
# abrir http://localhost:7373
```

O simplemente abrir `index.html` directo en el navegador (funciona sin servidor).

## Paleta de colores

| Variable CSS | Color | Uso |
|---|---|---|
| `--violet` | `#7c3aed` | Color principal, botones, títulos TNVR |
| `--amber` | `#f59e0b` | KPI "buscan hogar", bloque ear-tip |
| `--green` | `#10b981` | KPI "castrados" |
| `--red` | `#ef4444` | KPI "pendientes" |
| `--cream` | `#fff7ed` | Fondo galería y contacto |

## Fuentes citadas

- TNVR: Alley Cat Allies · ASPCA · OMSA (woah.org)
- Socialización: Jackson Galaxy Foundation · ASPCA · Alley Cat Allies
