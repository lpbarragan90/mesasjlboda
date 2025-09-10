# Mapa de Mesas J&L — PWA lista para iPhone

Esta carpeta contiene una **Aplicación Web Progresiva (PWA)** con guardado local y uso offline. Puedes:
- **Instalarla en iPhone** (Añadir a pantalla de inicio en Safari).
- **Usarla offline** (se guarda en el dispositivo).
- **Publicarla** fácilmente con **Firebase Hosting** o **GitHub Pages**.

> **Nota sobre Google Drive**: Drive es excelente para **guardar** el ZIP, pero **no** sirve como hosting web para una PWA (no registra Service Worker desde la vista previa de Drive). Para ejecutar en iPhone y poder instalarla como app, publícala en un hosting HTTPS (por ejemplo, **Firebase Hosting**) y guarda aquí los archivos como respaldo.

---

## Opción A: Firebase Hosting (recomendado)

1) Instala herramientas (desde tu PC/Mac):
```bash
npm install -g firebase-tools
firebase login
```

2) Crea un proyecto (si no tienes uno):
```bash
firebase projects:create --display-name "Mesas JL"
```

3) Inicializa el hosting en la carpeta del proyecto (conteniendo estos archivos):
```bash
firebase init hosting
# - Selecciona el proyecto
# - Public directory: (.) punto
# - Configure as single-page app: y
# - No overwrites
```

4) Publica:
```bash
firebase deploy
```

5) Abre la URL HTTPS que te da Firebase en **Safari (iPhone)** y toca **Compartir → Añadir a pantalla de inicio**.

---

## Opción B: GitHub Pages

1) Crea un repositorio y sube esta carpeta (index.html, sw.js, manifest.webmanifest e icons/).
2) En **Settings → Pages**, selecciona **Deploy from a branch**, rama `main`, carpeta **root**.
3) GitHub te dará una URL tipo `https://usuario.github.io/repo`. Ábrela en **Safari (iPhone)** y **Añadir a pantalla de inicio**.

---

## ¿Cómo guardar/respaldar en Google Drive?

- Sube el archivo `mesa-pwa.zip` a tu Drive.
- Para **ejecutar** la app como PWA, **no** uses la vista previa de Drive; en su lugar, usa una de las opciones de hosting de arriba.
- Una vez publicada, podrás abrirla desde el iPhone, instalarla y usarla offline.

---

## Personalización rápida

- Íconos en `icons/`. Puedes reemplazar `icon-192.png` y `icon-512.png` por tu identidad visual.
- Colores de la app: editando `theme-color` en `index.html`/`manifest.webmanifest`.
- Estado local: se guarda en `localStorage` bajo la clave `plan_mesas_jl_v3`.

¡Listo! Solo publica y úsala.