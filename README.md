# RunSocial — CSS Frameworks CA (Tailwind)

![RunSocial — homepage](/images/homepage.jpg)

**Live demo:** https://run-social.netlify.app/  
**Repository (branch):** https://github.com/Inamarie84/css-frameworks-ca/tree/css-frameworks

---

## Overview

RunSocial is a responsive front-end for a social running app, built for the **CSS Frameworks** course using **Tailwind CSS**.  
It includes three pages per the brief: **Authentication**, **Feed**, and **Profile**—with mobile-friendly layout, form validation, and accessible UI patterns.

## Features

- Responsive layout (Auth, Feed, Profile)
- Accessible navigation (Skip link, visible focus)
- Stable image loading (intrinsic sizes + consistent aspect)
- Lightweight JS (menu / form toggles only)

## Pages

- `/` — **Authentication** (login/register with HTML validation, min password length 8)
- `/feed/` — **Feed** (post grid, search/sort UI, new post form, skeleton loader)
- `/profile/` — **Profile** (avatar, username, list of posts, follow/followers)

## Tech Stack

- **Tailwind CSS** (npm; no CDN)
- Vanilla **HTML** + a tiny bit of **JS** (menu + form toggling)
- No additional frameworks required

---

## Getting Started

### Prerequisites

- Node **18+**
- npm **9+**

### Install

```bash
git clone https://github.com/Inamarie84/css-frameworks-ca.git
cd css-frameworks-ca
git checkout css-frameworks
npm install


```

## Develop (static)

Serve the folder with any static server (e.g. **VS Code Live Server**) and open:

- `/index.html`
- `/feed/index.html`
- `/profile/index.html`

## Build CSS

```bash
npm run build   # builds/minifies Tailwind CSS to /css/style.css
```

Note: If you have a watch/dev script locally, it simply rebuilds Tailwind on file changes. It’s not required to view the static pages.

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

## Contact

- LinkedIn: <https://www.linkedin.com/in/ina-marie-forseth-66a7b232/>

```

```
