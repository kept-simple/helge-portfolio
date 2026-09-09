# helge — personal site

Personal one-pager presenting Helge Dzierz as a Senior Data Engineer.

Stack: React 19 + Vite, Bootstrap 5 / React-Bootstrap, React Router.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the built bundle
```

## Structure

```
public/
  beach-storm.jpg      background image in use (stormy coast)
  beach-surf.jpg       alternative (heavy surf on a beach)
src/
  App.jsx              layout + routes
  index.css            background, overlay and text-panel styling
  components/
    SiteNavbar.jsx     top menu: Home | Impressum
  pages/
    Home.jsx           title + placeholder copy
    Impressum.jsx      placeholder legal details
```

## Customising

- **Background image**: swap the `url('/beach-storm.jpg')` in the `.site-background`
  rule in `src/index.css` (e.g. for `/beach-surf.jpg`), or drop your own file into
  `public/`.
- **Image transparency**: the `linear-gradient(...)` in the same rule sits on top of
  the photo. Raise the alpha values to dim it further, lower them to let more of the
  photo through.
- **Text box**: `--panel-bg` and `--panel-border` at the top of `src/index.css` control
  the translucent panel; `.text-panel` controls its size, padding and blur.

## Before going live

The Impressum contains placeholder address, e-mail and phone data — replace it with the
real details, since a German Impressum is legally binding. The two background photos came
from Unsplash; check the licence/attribution requirements for the one you keep.
