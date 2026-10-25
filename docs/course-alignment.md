# Course alignment and boundaries

The supplied documents are reference material, not operational instructions. No Blackboard access or video access was needed. Source PDFs stay outside the deployed app; temporary extractions and renders under `tmp/` are ignored by Git and never copied into `dist/`.

## Primary sources used

| Supplied source | Use |
| --- | --- |
| 1183 Course Outline.pdf (Fall 2026) | Topic groupings: Chapters 1–5, Chapters 6–9, cumulative statistics; quiz/test context. |
| Test 1 Information.pdf | Household conversions supplied; metric prefixes, insulin strengths, mass/volume concentration and proportions expected knowledge. |
| Test 1 Review Notes.pdf | Visually checked handwritten rounding, Test 1 scope, proportions and dimensional analysis guidance. |
| Test 1 Solutions.pdf (October 15, 2026) | Primary styles for fractions, percentages, rounding, proportions, conversions, dosage and insulin. |
| Test 1 Practice.pdf and Test 1 Practice Solutions.pdf (2026) | Supplementary speed conversions and quarter-tablet dosage questions. |
| Test 2 Practice.pdf and Test 2 Practice Solutions.pdf (2025) | Dilutions, serial dilutions, titre, hemocytometer, drip rates, CRI and nutrition. |
| Mock Exam.pdf and Mock Exam Solutions.pdf (2025) | Cumulative question style and numeric statistics. |
| Test 1 Review Problems.pdf and Test 1 Review Solutions.pdf | Sample scanned pages visually inspected for student-generated arithmetic, proportions and dosage style; not exhaustively transcribed. |

## Template coverage

| Group | Implemented types |
| --- | --- |
| Numbers and fractions | Scientific notation; mixed to improper fraction; fraction addition/division; percentage multiplication; price percentage decrease. |
| Ratios and proportions | Algebraic proportion; nearest half/quarter; bottle duration. |
| Measurement | mg to pg; gallons/pints to litres; m/s to km/h; mass/volume % to mg/mL. |
| Dosage | Dose from % solution; quarter tablets with gram-to-kg conversion; U-40/U-100; pounds-to-kg dose. |
| Solutions and dilutions | Two-part stock/diluent volumes; dilution factor; serial concentration; reciprocal titre; hemocytometer cell concentration. |
| Fluids | Whole-drop drip rate; hourly-to-daily fluid volume; CRI stock volume for fixed final volume. |
| Nutrition | Course RER formula and multiplier; grams of food per day; dry matter protein. |
| Statistics | Mean and median; approximate reference interval; specificity. |

30 templates total. Session generation balances selected topics, then cycles through shuffled templates. It changes parameters on every generated instance. A seed is stored with the session for reproducibility.

## Intentional limits

This is an initial calculation-practice tool, not full course coverage or a replica of each paper. Not yet implemented: free-text explanations, Levey–Jennings charts/control rules, select-all questions, full probability coverage, mixed-drug cocktail adjustments, MIC, every metric/household conversion direction, and all scientific/fraction arithmetic variants. Individual lesson notes would be especially useful for these additions and for confirming current Test 2 conventions (the supplied later-course papers are from 2025).

Questions use new parameter values, so source references point to the **style**, not a verbatim copy. Answer-part percentages do not match instructor point allocations. There is no AI text grader or live model generation; deterministic formulas give reproducible results without an API key.

## Source discrepancies and resolutions

- Test 1 Q10(a) prints 357 km in the question and 375 in a solution line. 357 / 12 × 60 = 1785, consistent with the final answer. Templates calculate from their own parameters.
- Test 1 Practice Q16(a) has an alternative solution with inverted unit labels. We use `required mg / (mg/mL)`.
- Test 1 Practice Q16(e) uses 35 mg/mL in the prompt and one solution but 45 in its alternative line. We calculate directly from the question parameters.
- Test 2 practice mixes its cover rounding rule with values such as 25.1%, 3.4 mol/L and 2.3% where other rounding would give 25.14%, 3.43 mol/L and 2.25%. The app explicitly states rounding on every field instead of reproducing inconsistent key rounding.
- Mock Exam Q26 specificity: 454 / (454 + 18) × 100 = 96.18644…%, so normal rounding gives **96.19%**, not the printed 96.18%. This is an independent regression test.
- The source cover rule says “under 100” / “over 100,” leaving exactly 100 unspecified. The app uses whole numbers at or above 100 and explains this decision.
- For scientific notation, round the coefficient to two decimals. This avoids rounding tiny quantities to zero.
- Explicit quarter-tablet and whole-drop rules override ordinary decimal rounding.
- Household factors differ slightly across papers and yield alternative valid values. Generated questions explicitly specify the required conversion factor where relevant, instead of applying a broad tolerance that might accept a wrong calculation.
- Tube 1 is undiluted stock. Serial concentration and titre use `tube number − 1` dilutions.
- CRI uses the papers' fixed final-volume convention, stated in the prompt. It does not model practical bag overfill or additive displacement.
- RER uses the course's stated linear formula, not a generalized clinical nutrition model.

All animal/drug situations are arithmetic exercises. The app is not a medication or patient-care calculator.
