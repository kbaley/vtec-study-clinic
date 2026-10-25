# Verification

## Automated

Run `npm test` (Node 22+). Six test groups verify:

1. Accepted decimals, fractions, scientific notation, percentages, unit suffixes and grouped thousands.
2. Rejection of empty/malformed input, zero denominators, nonfinite numbers, expressions and incorrect units.
3. Required reduced-fraction/scientific format, exact requested rounding, and rejection of near-but-wrong answers.
4. Independently checked course examples for doses, dilutions, serial indexing, titre, drip rates, CRI, energy, dry matter and specificity.
5. All 30 templates over 200 seeds (6,000 generated questions): finite answers, nonempty explanations, canonical answer round-trip and rejection of a wrong value.
6. Seed reproducibility, topic filtering, balanced coverage and empty-selection validation.

`npm run build` copies only public assets to `dist/`. `node --check public/app.js` checks UI script syntax. No dependency install or network is required to build or run tests.

## Manual browser checks

Verified in the Codex in-app browser: dashboard rendering; guided practice; blank-response validation; correct and incorrect feedback with worked solutions; navigation; refresh and resume with answers retained; submission confirmation with unanswered parts; result scoring; topic progress; and quiz mode withholding feedback while preserving editable answers across navigation. QA session data was cleared afterwards.

For future edits, test a narrow viewport and keyboard navigation, multi-part questions, each answer format, restoring a timed session after its deadline, browser storage disabled/full, and hosted asset loading. GitHub Pages deployment is verified separately through the Actions run and the live site.
