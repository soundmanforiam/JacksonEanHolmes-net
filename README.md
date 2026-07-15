# Jackson Ean Holmes — Photography Site

A static site, no build step, no framework, no dependencies to install.

## Files

```
index.html   — page structure (rarely needs edits)
styles.css   — all visual styling
app.js       — renders the page from content.js (rarely needs edits)
content.js   — ★ EDIT THIS FILE to change any text, image, or list
```

## Editing content

Open `content.js`. Every piece of text and every image on the site comes
from that one file: the hero name/tagline, the about paragraphs, the
gallery photos + captions, testimonials, and contact info. Change a value,
save, and refresh the page — that's it.

To swap in your own photos:
1. Drop image files into the `assets/` folder.
2. In `content.js`, change the `src`/`image` value to `"assets/your-file.jpg"`.

(Right now the gallery points at the placeholder images from the old site
so you can see the layout — replace them with real, full-resolution shots
before launch. Large photography images should ideally be under ~500KB
each, exported at roughly 2000px on the long edge, for fast loading.)

## Running it locally

No build tools needed. Any static file server works, e.g.:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open the printed local URL in your browser.

## Deploying to Cloudflare Pages

**Option A — drag and drop (fastest)**
1. Go to the Cloudflare dashboard → Workers & Pages → Create → Pages → Upload assets.
2. Drag this whole folder in (or a zip of it).
3. Deploy — Cloudflare gives you a `*.pages.dev` URL immediately.

**Option B — connect a Git repo (recommended for ongoing edits)**
1. Push this folder to a GitHub/GitLab repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build settings: **no build command**, output directory: `/` (project root).
4. Deploy. Every future push updates the live site automatically — including
   edits you make to `content.js`.

**Custom domain:** once deployed, go to your Pages project → Custom domains
→ add `jacksoneanholmes.com` and follow the DNS instructions (if the domain
is already on Cloudflare, this is a couple of clicks).

## Notes on the design

- Dark, editorial "contact sheet" theme: gallery frames are numbered like
  film frames, and hovering one reveals a simulated caption + shot info
  (lens, aperture, shutter, ISO) — pulled straight from `content.js`.
- Fonts: Fraunces (display/serif), Archivo (body), Space Mono (captions/labels).
- Fully responsive, keyboard-navigable, and respects reduced-motion settings.
