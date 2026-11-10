# Mehdi Jouhari Portfolio

A dependency-free, responsive portfolio built with semantic HTML, CSS, and native JavaScript modules. Start a local static server from this folder (for example, `npx serve .`) and open the URL it prints. ES modules should be served over HTTP rather than opened directly as a `file:` URL.

## Customize

- Edit `data.js` to update the profile name, role, introduction, biography, links, CV path, projects, expertise, stack groups, repositories, and experience or education entries. Project cards and detail views are rendered from the same project list; keep each project's `id` unique.
- Replace the six data-driven project diagrams in `app.js`/`styles.css` by changing each project's `diagram` labels or by replacing the `.project-visual` renderer with your own local image paths. No project photos or external image services are required.
- Edit `technologyIcons` in `data.js` to add or remove carousel marks, and `stackTechnologyIcons` or `stackIconAliases` to customize logos in the technical stack. Entries may use Simple Icons slugs or an explicit SVG `url`.
- Replace `/assets/Mehdi-Jouhari-CV-REPLACE.pdf` in `data.js` and the hero link in `index.html` with a real CV PDF before publishing. The current path is intentionally a placeholder.
- Replace `EMAIL-TO-BE-ADDED` in `index.html` with a verified email address. Add verified employment, education, and certification details to the `journey` data in `data.js`.
- Secondary repository cards intentionally contain only names and GitHub links because no descriptions or languages were supplied.

The dark theme is the default. Theme choice is stored as `portfolio-theme` in local storage when browser storage is available.