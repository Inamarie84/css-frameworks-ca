# CSS Frameworks — Social Media UI (Tailwind)

**Branch:** `css-frameworks` (open PR into `main`)  
**Assignment:** Build a responsive front end for a social media app using a CSS framework.

## Pages

- `/` – **Authentication** (login/register)
  - HTML validation (email, password ≥ 8 chars)
  - Toggle between login and register
- `/feed/` – **Feed**
  - Post cards (thumbnails, captions)
  - Search input + sort select (UI only)
  - “Create new post” form (UI only)
  - Skeleton loader for perceived performance
- `/profile/` – **Profile**
  - Avatar, username, posts list
  - Follow/Unfollow button
  - Followers/Following counts

> **Note:** This is a UI/markup assignment. No backend/API; JS is minimal and limited to UI toggles.

## Stack

- **Tailwind CSS** (installed via npm; no CDN)
- **Vanilla JS** for:
  - Mobile menu toggle (with `aria-expanded`)
  - Auth forms toggle (login/register)
  - Skeleton loader reveal
  - “Create new post” form toggle

## Scripts

```json
{
  "scripts": {
    "dev": "tailwindcss -i ./css/input.css -o ./css/style.css --watch",
    "build": "tailwindcss -i ./css/input.css -o ./css/style.css --minify"
  }
}
```

## Development

1. Install deps:

   ```bash
   npm install

   ```

2. Start dev server:
   ```bash
   npm run dev
   ```
3. Serve the folder with a static server (e.g. VS Code Live Server) and open:

- /index.html

- /feed/index.html

- /profile/index.html

4. Build a minified stylesheet for production:

   ```bash
   npm run build
   ```

## Project Structure

```text

css-frameworks-ca/
├─ css/
│ ├─ input.css # Tailwind source
│ └─ style.css # Built output (generated)
├─ js/
│ └─ script.js # Small UI interactions
├─ images/ # Favicons, thumbnails, etc.
├─ index.html # Auth page (login/register)
├─ feed/
│ └─ index.html # Feed page
└─ profile/
└─ index.html # Profile page

```

## Accessibility & Performance Improvements (Portfolio 2)

### /index.html (Auth)

- A11y: Added Skip to content link → #main (WCAG 2.4.1).

- Focus states: Visible focus rings on form fields/buttons.

- Form UX: Clear labels, HTML validation (email/password).

- Paths: Made CSS/JS paths consistent.

- Video: Decorative logo video marked aria-hidden + playsinline.

**Commit:** [47b523a9008cec1673bc0eec99160311c773807c](https://github.com/Inamarie84/css-frameworks-ca/commit/47b523a9008cec1673bc0eec99160311c773807c)

### /feed/index.html

- A11y: Added Skip link; mobile menu button with aria-controls + aria-expanded and JS toggle.

- Performance: Added width/height + loading="lazy" to all post thumbnails; enforced aspect-[16/10] + object-cover to reduce CLS.

- UI polish: Added mt-10 above skeleton loader for spacing.

- Paths: Normalized relative asset paths in <head>.

**Commit:** [895ed05dd4d1fd128e8d9ae60499c6784402a9a8](https://github.com/Inamarie84/css-frameworks-ca/commit/895ed05dd4d1fd128e8d9ae60499c6784402a9a8)

## How to Review

- Open pages directly (served via **Live Server**) to test responsiveness.
- Inspect with **Chrome DevTools → Lighthouse** to verify accessibility and performance.

### Keyboard test

- **Tab** should reach the **Skip to content** link.
- Mobile menu button should update **`aria-expanded`** when toggled.

## Notes for Assessors

- The branch **`css-frameworks`** remains open as a PR per the brief’s requirement.
- Tailwind is installed/configured via **npm** with **dev** and **prod** scripts.
- No framework mixing: **Tailwind only** (no Sass/Bootstrap in this option).

```

```
