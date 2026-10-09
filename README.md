# Stalin Carrión — Unity & XR Developer

Personal portfolio built for **GitHub Pages**, in Spanish and English.

## Portfolio

- Spanish: https://stalinfcc.github.io/stalin-carrion/
- English: https://stalinfcc.github.io/stalin-carrion/en.html
- Case study example: https://stalinfcc.github.io/stalin-carrion/project.html?id=audiencias&lang=en

## Design and purpose

Dark, editorial and project-first interface inspired by the **presentation principles** of [Hugo Peters' portfolio](https://hugo.fyi/), with independent styling and code. Projects show problem, solution, specific contribution and demonstrable outcome. It does not reuse Hugo's code, graphics or other assets.

The site uses static HTML, CSS and vanilla JavaScript: no build step, dependencies or API keys.

## Files

- `index.html` — Spanish homepage
- `en.html` — English homepage
- `project.html` — project detail template (query parameters `id` and `lang`)
- `portfolio.css` — responsive layout and subtle animations
- `portfolio.js` — cards, navigation, language switching and project detail rendering
- `portfolio-data.js` — bilingual content for all projects (edit here)
- `config.js` — optional public video, demo and code links
- `assets/img/` — images
- `assets/CV_Stalin_Carrion.pdf` — current Spanish résumé

The previous `styles.css` and `script.js` files are retained but not used by the redesigned pages. They can be removed in a later cleanup.

## Adding material

Open `portfolio-data.js` and find a project by its `id`. Replace the `image` property with a relative image file path, such as `assets/img/fisica.webp`, after adding your own screenshot to the repository. Keep the `es` and `en` text versions synchronized.

Physics/Mathematics VR and Jomara currently have **conceptual CSS visuals**, clearly indicated as placeholders rather than claimed screenshots. Add real screenshots to improve them.

Add videos or public repositories in `config.js` under the matching project key. Links are rendered only if the URL starts with `https://`.

## Privacy, accuracy and accessibility

Only publish screenshots, media and source code you are authorized to share. Do not add user records, internal credentials or patients' images. The site avoids invented results, respects `prefers-reduced-motion`, provides keyboard-accessible links and has a responsive navigation.

The website's **EN** version is translated, but the linked résumé PDF is currently in Spanish. A separate `CV_Stalin_Carrion_EN.pdf` can be added later.

## Publishing

In Settings → Pages, select **Deploy from a branch → main → /(root)**. If this redesign is reviewed on a feature branch, merge its pull request before expecting changes to appear on the live site.

