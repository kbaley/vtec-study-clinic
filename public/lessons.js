// Chapter names follow the supplied course outline (4th edition references).
// These are app-written study summaries, not links to Blackboard lesson files.
const lesson = (title, chapter, steps) => ({title, chapter, steps});
const scientific = lesson('Scientific notation', 'Chapter 1 · Arithmetic review', [
  'Write a number as a coefficient multiplied by a power of 10. In normalized notation, the absolute value of the coefficient is at least 1 and less than 10.',
  'Moving the decimal left produces a positive exponent for a large number; moving it right produces a negative exponent for a small number.',
  'Follow the question’s coefficient rounding rule. For example, 0.000456 = 4.56 × 10⁻⁴, entered as 4.56e-4.'
]);
const fractions = lesson('Fractions and fraction arithmetic', 'Chapter 1 · Arithmetic review', [
  'To convert a mixed number, multiply the whole number by the denominator and add the numerator. Keep the denominator.',
  'For addition, use a common denominator. For division, multiply by the reciprocal of the second fraction.',
  'Reduce the numerator and denominator by their greatest common factor. For example, 6/8 reduces to 3/4.'
]);
const percentages = lesson('Decimals and percentages', 'Chapter 1 · Arithmetic review', [
  'Divide a percentage by 100 to turn it into a decimal. For example, 25% = 0.25.',
  'Multiply percentages as decimals, then multiply the result by 100 to report a percentage.',
  'For a percentage decrease, divide the decrease by the original value and multiply by 100. Use the original value as the denominator.'
]);
const rounding = lesson('Rounding to halves and quarters', 'Chapter 1 · Rounding to fractions', [
  'For halves, multiply by 2, round to a whole number, and divide by 2.',
  'For quarters, multiply by 4, round to a whole number, and divide by 4.',
  'Round only the final result. Check the two adjacent allowed values to see which is closer.'
]);
const proportions = lesson('Ratios and proportions', 'Chapter 2 · Ratio and proportion', [
  'A proportion states that two ratios are equal. Cross multiply, then divide to isolate the unknown.',
  'Keep the units attached so you know what the unknown represents.',
  'Check by substituting your answer into the original proportion. Keep intermediate values unrounded.'
]);
const dimensional = lesson('Dimensional analysis', 'Chapter 2 · Dimensional analysis', [
  'Start with the given quantity and multiply by conversion factors arranged so unwanted units cancel.',
  'For rates, convert both numerator and denominator as needed. There are 1000 m in a km and 3600 seconds in an hour.',
  'For duration, volume divided by volume per day leaves days. Confirm that the final units match the question.'
]);
const metric = lesson('Metric measurement systems', 'Chapter 4 · Measurement systems', [
  'Write each prefix as a power of ten: kilo 10³, milli 10⁻³, micro 10⁻⁶, nano 10⁻⁹, pico 10⁻¹².',
  'Convert to the base unit, then to the requested unit. For example, 1 mg = 10⁻³ g = 10⁹ pg.',
  'If scientific notation is requested, normalize the coefficient and follow its rounding rule.'
]);
const household = lesson('Household unit conversions', 'Chapter 4 · Measurement systems', [
  'Use the conversion factors given in the question. Slightly different rounded factors can produce different results.',
  'Combine mixed quantities in one unit first. For gallons and pints, multiply gallons by 8 and add the remaining pints.',
  'Then convert pints to mL and mL to litres, keeping intermediate values unrounded.'
]);
const concentration = lesson('Mass/volume percentage', 'Chapter 5 · Dosage calculations', [
  'A mass/volume percentage means grams of solute per 100 mL of solution.',
  'Multiply the percentage number by 10 to get mg/mL: 1% = 1 g/100 mL = 10 mg/mL.',
  'For a dose, calculate the required drug mass first, then divide by the concentration in matching units.'
]);
const dosage = lesson('Dosage calculations and units', 'Chapter 5 · Dosage calculations', [
  'Convert the animal’s mass to kg before using a dosage in mg/kg. Divide grams by 1000 or pounds by the supplied lb/kg factor.',
  'Required drug mass = animal mass × dosage. Volume = required drug mass ÷ concentration; tablets = required drug mass ÷ mg per tablet.',
  'Keep intermediate values unrounded and apply the specified rounding rule to the final answer, including quarter-tablet rules.'
]);
const insulin = lesson('Insulin concentrations: U-40 and U-100', 'Chapter 5 · Dosage calculations', [
  'U-40 contains 40 IU/mL; U-100 contains 100 IU/mL.',
  'Required IU = mass in kg × prescribed IU/kg.',
  'Divide required IU by IU/mL to find mL. Check the insulin strength before calculating.'
]);
const dilution = lesson('Dilutions and stock solutions', 'Chapter 8 · Dilutions', [
  'Use C₁V₁ = C₂V₂, with both concentrations in matching units and both volumes in matching units.',
  'V₂ means the final solution volume, not the diluent volume. Diluent = final volume − stock volume.',
  'The dilution factor is final volume ÷ stock volume. A factor of 4 means one part stock in four total parts, or one part stock plus three parts diluent.'
]);
const serial = lesson('Serial dilutions and titre', 'Chapter 8 · Serial dilutions', [
  'In these course questions, tube 1 is the original undiluted stock. Tube n has undergone n − 1 dilutions.',
  'Concentration in tube n = stock concentration ÷ dilution factor^(n − 1).',
  'For titre, use the last positive tube. The reciprocal titre is dilution factor^(last positive tube − 1), not the number for the first negative tube.'
]);
const cells = lesson('Cell counts after dilution', 'Chapter 8 · Dilutions', [
  'Find the total counted volume: number of areas × volume of each area.',
  'Divide the counted cells by that volume to find the diluted concentration.',
  'Multiply by the dilution factor to undo dilution. For cells/nL to cells/L, multiply by 10⁹. Then normalize scientific notation.'
]);
const fluids = lesson('Intravenous fluids and drip rates', 'Chapter 7 · Intravenous fluids', [
  'Multiply the fluid requirement per kg by animal mass to find the required volume for the stated period.',
  'For gtt/min, multiply volume in mL by the set’s gtt/mL, then divide by administration time in minutes.',
  'Distinguish hourly and daily rates. Use the actual administration duration and round drops to a whole number when requested.'
]);
const cri = lesson('Constant rate infusions', 'Chapter 7 · Constant rate infusions', [
  'Find the daily drug volume: kg × mg/kg/day ÷ stock concentration in mg/mL.',
  'Find the daily total fluid volume: kg × mL/kg/day.',
  'Stock drug volume for a bag = final bag volume × daily drug volume ÷ daily fluid volume. These exercises use the fixed final-volume convention stated in the prompt.'
]);
const energy = lesson('Energy requirements and feeding amounts', 'Chapter 9 · Nutrition', [
  'Use the course formula RER = 30 × mass in kg + 70 kcal/day, then apply the stated activity multiplier.',
  'Convert daily calories to food mass using grams per calorie. If a can has 100 kcal in 85 g, its conversion factor is 85 g / 100 kcal.',
  'Check whether the question asks for calories or grams of food. Keep intermediate calculations unrounded.'
]);
const dry = lesson('Dry matter basis', 'Chapter 9 · Nutrition', [
  'Dry matter percentage = 100 − moisture percentage.',
  'Nutrient percentage on a dry matter basis = nutrient percentage as fed ÷ dry matter percentage × 100.',
  'Use the dry matter as the denominator, not the moisture. For example, 5% protein with 80% moisture gives 5 ÷ 20 × 100 = 25% protein on a dry matter basis.'
]);
const averages = lesson('Mean and median', 'Chapter 10 · Basic statistics and probability', [
  'Mean = sum of all observations ÷ number of observations. Include zeros in the count.',
  'Sort the observations before finding the median.',
  'With an even number of observations, average the middle two; with an odd number, use the single middle observation.'
]);
const range = lesson('Reference ranges and standard deviation', 'Chapter 10 · Basic statistics and probability', [
  'These questions use the approximate 95% reference range: mean ± 2 standard deviations.',
  'Lower limit = mean − 2 × SD. Upper limit = mean + 2 × SD.',
  'Report both bounds, keeping intermediate values unrounded. This is a reference range, not a confidence interval for the mean.'
]);
const specificity = lesson('Diagnostic test specificity', 'Chapter 10 · Basic statistics and probability', [
  'Specificity measures how often a test correctly identifies an actually negative patient.',
  'The actually negative group is true negatives plus false positives.',
  'Specificity = TN ÷ (TN + FP) × 100%. False negatives belong to the actually positive group and do not enter this denominator.'
]);
export const reviewLessons = {
  scientific, 'mixed-fraction':fractions, 'fraction-arithmetic':fractions,
  'percent-product':percentages, 'percent-change':percentages,
  proportion:proportions, 'fraction-rounding':rounding, bottle:dimensional,
  metric, household, speed:dimensional, concentration,
  'dose-volume':concentration, tablets:dosage, insulin, 'dose-pound':dosage,
  dilution, 'dilution-factor':dilution, serial, titre:serial, 'cell-count':cells,
  drip:fluids, 'fluid-volume':fluids, cri, energy, food:energy,
  'dry-matter':dry, 'mean-median':averages, 'reference-range':range, specificity
};
