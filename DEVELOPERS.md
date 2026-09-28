# Developer guide

## Requirements

Use a current Node.js LTS release and npm.

## Local development

```sh
npm install
npm run dev
```

Build the production site with `npm run build`, then preview it locally with `npm run preview`.

## Quality checks

Run the following before publishing:

```sh
npm run typecheck
npm run test
npm run lint
npm run format:check
npm run spellcheck
npm run build
```

Use `npm run format` to apply the project formatter.

## Deployment

- Production: https://wowredflag.com
- Hosting: Cloudflare Pages
- Build command: `npm run build`
- Build output directory: `dist/`
