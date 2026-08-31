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
npm run check
npm run lint
npm run format:check
npm run spellcheck
npm run build
```

Use `npm run format` to apply the project formatter.

## Publish on Cloudflare Pages

1. Push this repository to GitHub and sign in to the Cloudflare dashboard.
2. Go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select `sampl/wow-red-flag` and set `main` as the production branch.
4. Set the build command to `npm run build` and the build output directory to `dist`.
5. Save and deploy. Cloudflare deploys future pushes to `main`; other configured branches receive preview deployments.
6. After the first deployment, open the Pages project’s **Custom domains** settings to attach `wowredflag.com` and follow Cloudflare’s DNS prompts.

Verify `npm run build` succeeds locally before each release. See Cloudflare’s [Astro build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/) and [Git integration guide](https://developers.cloudflare.com/pages/get-started/git-integration/) for current dashboard details.
