# GSV vs Mystics

A single-page event landing site for the Kodex suite night at Chase Center (Golden State Valkyries vs. Washington Mystics), built with [Astro](https://astro.build).

## Features

- Full-bleed hero with slowed background video
- Scroll-driven, sticky timeline with an animated basketball traveling across event stops
- Tabbed "Important Information" section (Bags / Payments / Tickets) with crossfading visuals
- IntersectionObserver scroll-reveal animations

## Tech stack

- **Astro 5** — static site generation
- Vanilla TypeScript for the interactive scripts (bundled by Astro)
- Plain CSS (`src/styles/global.css`)

## Project structure

```text
/
├── public/
│   └── assets/          # images + video (served as /assets/*)
├── src/
│   ├── pages/
│   │   └── index.astro  # the page markup + client scripts
│   └── styles/
│       └── global.css    # all styles
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## Getting started

```bash
npm install
npm run dev
```
