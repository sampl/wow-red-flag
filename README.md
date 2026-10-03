<!-- markdownlint-disable-file MD033 -->
<!-- markdownlint-disable-file MD041 -->

<img src="public/icon.png" alt="Red flag" width="48" />

# "Wow, red flag..."

A list of patterns found in difficult relationships.

Live at **[wowredflag.com](https://wowredflag.com) ➡️**

## Browsing

- Filter by one tag at a time; click the selected tag or its × to show all patterns again.
- Pattern links and alternate names open the canonical pattern and clear filters, including when using browser history. Invalid links leave filters unchanged.
- Safety guidance appears before the patterns.
- Decorative GIFs load lazily, cannot receive keyboard focus, and are suppressed when reduced motion is preferred. Preference changes take effect without reloading.
- The pattern list and direct canonical links remain available without JavaScript.

## Documentation

- [CONTRIBUTING.md](CONTRIBUTING.md) to suggest a change
- [CONDUCT.md](CONDUCT.md) for community standards
- [DEVELOPERS.md](DEVELOPERS.md) for dev instructions

## Intentionally skipped

- Dark mode: the site uses a light theme only.
- Search and copy-link controls.
- Architecture review.

## License

Original site content is licensed under [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/).

## Disclaimer

This site offers general educational information, not a diagnosis or medical, mental-health, legal, or professional advice. Every relationship and situation is different. If you are in immediate danger, contact local emergency services or a qualified crisis resource.

### Are you or a loved one in physical danger?

Call your local emergency number. In the United States, you can also contact the National Domestic Violence Hotline at [800-799-7233](tel:8007997233).

## Release planning

- [STRATEGY.md](STRATEGY.md) — Scope, audience, and learning goals
- [PITCH.md](PITCH.md) — Public-facing promise
- [LAUNCH.md](LAUNCH.md) — Friendly alpha plan
- [RELEASE.md](RELEASE.md) — Readiness evidence and remaining gates

## Intentionally skipped

This release is a free static reading resource. The following release checklist items are intentionally skipped:

- Authentication, accounts, organizations, teams, product folders, persisted projects, and project CRUD: readers do not create private work or need identity.
- Account onboarding and a dashboard checklist: reading begins directly on the page.
- Paid entitlements, upgrades, pricing pages, and password-protected subscription mocks: there is no paid tier. The newsletter is an email subscription, not a product entitlement.
- Database migrations and import/export tools: there is no database or user-created work.
- Platform debug drawer, stored-state inspection, secret feature flags, and mocked entitlements: the site has no stored application state or secret features.
- Application, route, and action loading/error screens: the reading experience is static HTML with synchronous local filters. Newsletter submission uses Formspree's hosted response; that flow still needs release verification.
- Guide videos: no guided setup is required; revisit if alpha readers need help.
- Secret storage in 1Password: no application secrets are present. Any future secret must use environment configuration and be stored in 1Password.

Persistent sharing uses pattern fragment URLs. Feedback uses GitHub issues, and contact/help is available through Directed Works.
