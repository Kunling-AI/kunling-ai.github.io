# KUNLING

The official English-language website of KUNLING (鲲灵智算): Knowledge-augmented Universal Neural Learning for Intelligent Numerical Geoscience.

The group is hosted at the Key Lab of Submarine Geosciences and Prospecting Techniques, Ministry of Education, Ocean University of China. The website is adapted from the open-source [SpaceLab](https://github.com/choucisan/SpaceLab) template and is deployed at <https://kunling-ai.github.io/>.

## Local development

```bash
pnpm install
pnpm dev
```

Create a production build with:

```bash
pnpm build
```

## Three.js Earth

The landing page uses Three.js and a local NASA Blue Marble texture. It does not require Mapbox, an API token, or a paid map service.

Earth imagery credit: NASA/Goddard Space Flight Center Scientific Visualization Studio. Blue Marble Next Generation data courtesy of Reto Stöckli (NASA/GSFC) and NASA Earth Observatory.

## Updating content

- Research directions: `src/data/research.ts`
- Team profiles: `src/data/team.ts`
- Team photos: `public/assets/team/`
- Brand logo: `public/assets/brand/kunling-logo.png`

Missing member fields are omitted from the rendered profile rather than replaced with placeholder copy.

## Routes

- `/` — immersive Three.js Earth, group mission, research, PI, open source, and team
- `/research/` — the six current research projects
- `/our-team/` — PI and team directory
- `/our-team/[slug]/` — individual profiles
- `/open-source/` — public repositories
- `/contact/` — contact details

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the Astro site and publishes `dist/` to GitHub Pages whenever `main` is updated.
