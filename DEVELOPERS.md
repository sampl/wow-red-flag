# Developer guide

## Requirements

Use a current Node.js LTS release and pnpm.

## Local development

```sh
pnpm install
pnpm run dev
```

Build the production site with `pnpm run build`, then preview it locally with `pnpm run preview`.

## Quality checks

Run the following before publishing:

```sh
pnpm run check
pnpm run test
pnpm run lint
pnpm run format:check
pnpm run spellcheck
pnpm run build
```

Use `pnpm run format` to apply the project formatter.

## Deployment

- Production: https://wowredflag.com
- Hosting: Cloudflare Pages
- Build command: `pnpm run build`
- Build output directory: `dist/`
