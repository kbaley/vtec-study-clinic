# Sydney’s Study Clinic

A self-contained practice app for Douglas College Mathematics for Veterinary Technology (VTEC / MATH 1183). Fresh numerical questions are generated locally from course-inspired templates, with independently calculated answers and worked solutions.

## Run locally

Requires Node.js 22 or newer. There are no npm dependencies to install.

```sh
npm run dev
```

Open http://127.0.0.1:4173. Stop with Ctrl+C.

```sh
npm test       # grading, known course examples, 6,000 generated questions
npm run build # writes deployable assets to dist/
```

## Deploy to GitHub Pages

The public site is hosted at https://kbaley.github.io/vtec-study-clinic/.

The workflow in `.github/workflows/github-pages.yml` runs tests, builds `dist/`, and deploys only those static assets on each push to `main`. It can also be run manually from GitHub Actions. It uses GitHub's built-in deployment token; no deployment secret, backend, database or AI API key is required.

For a new repository or fork:

1. Open repository **Settings → Pages** and choose **GitHub Actions** as the build and deployment source.
2. Push the code to `main`, or run **Deploy to GitHub Pages** from the Actions tab.
3. Open the deployment URL when the workflow succeeds.

The relative home and asset links support a project subdirectory as well as a custom domain. The site and this repository are public. Original course PDFs, temporary extractions, local secrets, and local browser progress are not published.

Official reference: [Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

The assets can still be hosted on Azure Static Web Apps if desired; `public/staticwebapp.config.json` is retained for that host. GitHub Pages does not apply that Azure-specific configuration or its custom HTTP headers.

## What you can do

- Guided practice with immediate feedback, hints, and worked solutions. Random encouragement responds to correct, incorrect, and unanswered parts; messages stay consistent when revisiting an answer.
- Short quizzes and longer practice tests, with feedback withheld until submission.
- Select Test 1, Test 2, or cumulative final-exam coverage, then focus on individual topics.
- Choose 5, 8, 10, 16, 19, or 27 questions. Counts refer to generated questions; multipart items have multiple scored answer parts.
- Optional countdown: 30 minutes for quizzes, 105 minutes for tests, or 120 minutes for cumulative final practice. Expiry submits saved answers. Closing the browser does not pause the deadline; an expired session is submitted when reopened.
- Save answers and scratch notes, leave, and resume after a refresh.
- Review results, practise missed topics, and see topic accuracy and recent sessions.
- Use the course reference and supplied household conversion factors.

The timer and question counts are practice settings, not exact replicas of the course assessments. The mock exam's cover and question numbering are inconsistent; this app does not use its printed mark totals.

## Marking rules

- Only final answers are graded, not handwritten working or explanations. Each answer part carries equal weight. No instructor-style method or partial-credit marks.
- Every field specifies its rounding rule. In the usual rule, values below 100 use two decimal places and values at or above 100 use whole numbers. Explicit rules override this (quarter tablets, whole drops, exact arithmetic, scientific coefficients).
- Use unrounded intermediates. A typed answer must equal the requested rounded result; the grader does not silently round an overly precise response. Trailing zeroes are optional.
- Percentage fields use percentage points: `25` or `25%`, not `0.25`, means 25%.
- Fraction questions require a reduced fraction with a positive denominator (an integer is accepted if the answer is integral).
- Scientific questions require normalized scientific notation, e.g. `2.34e-5` or `2.34 × 10^-5`.
- Numeric fields also accept fractions and scientific notation. Units are supplied beside the field; the exact displayed unit suffix can optionally be typed. Other units are rejected rather than silently converted.
- Invalid syntax prompts correction in guided mode. Quiz/test submission grades invalid or blank entries as incorrect.

## Data and privacy

All data stays in localStorage under `study-clinic-v1`. The last 50 completed sessions and one current session are retained. There is no analytics or external asset request. Different browsers/devices/origins have separate progress. Clearing browser data removes it. This is a study tool, not an exam-security system: answers and formulas are part of the browser code. Storage-unavailable sessions work in memory but cannot survive closing the tab.

## Project layout

- `public/engine.js`: seeded generator, 30 templates, parsing, and grading.
- `public/app.js`: UI, session navigation, countdown, local storage, progress.
- `public/styles.css`: responsive layout and design.
- `public/staticwebapp.config.json`: Azure security headers and MIME types.
- `tests/engine.test.mjs`: regression tests and generated-answer checks.
- `docs/course-alignment.md`: source mapping, assumptions, known limitations.
- `docs/verification.md`: what was verified and how to repeat the checks.

To add a problem type, register a template in `engine.js` with a topic, prompt, fields, explanation steps, hint, and source reference. Add a known-answer test independently calculated from the formula. Do not copy an answer key without checking its arithmetic and units.
