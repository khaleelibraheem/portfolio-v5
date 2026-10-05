# portfolio-v5

Personal site of Khaleel Alhaji, freelance frontend developer. Live at [khaleelalhaji.vercel.app](https://khaleelalhaji.vercel.app).

Built with Next.js 16 and Tailwind CSS 4, following the Plain Signal design system: a light, near-monochrome page with one blue accent, hairline structure and weight-400 type. A dark theme follows the system setting, with a manual toggle in the nav.

## Develop

```bash
npm install
npm run dev     # http://localhost:3100
npm run build
npm run lint
```

## Structure

- `app/page.tsx`: all page content (projects, experience, principles) and sections
- `app/site-nav.tsx`: header, mobile menu sheet and theme toggle
- `app/globals.css`: design tokens (light and dark) and component styles
- `app/layout.tsx`: fonts, metadata and the pre-paint theme script
- `app/icon.svg`: favicon, drawn from the logo mark
