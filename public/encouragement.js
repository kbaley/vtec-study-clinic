const messages = {
  correct: [
    'You’ve got it, Sydney. One more skill to feel confident about.',
    'Nicely done! Let that little win count.',
    'That’s it. You’re building this one question at a time.',
    'A little more practice, a little more confidence. Nice work!',
    'Yes, Sydney! Take that confidence into the next question.',
    'That answer checks out. Give yourself a moment to enjoy it.',
    'Another good step forward. Keep going at your own pace.',
    'Well done! These small wins add up.'
  ],
  incorrect: [
    'Not there yet, Sydney—and that’s what practice is for. Let’s work through it.',
    'One answer doesn’t define your progress. Take it a step at a time below.',
    'You can learn something useful from this one. Compare your steps with the solution.',
    'Take a breath, Sydney. You don’t have to get everything right the first time.',
    'This is a good place to pause and learn. Find the first step that differs from yours.',
    'Keep going gently. Working through a mistake is part of getting more confident.',
    'There’s room to figure this out. Use the worked solution as your guide.',
    'Today’s tricky question can become tomorrow’s familiar one. Let’s unpack it.'
  ],
  unanswered: [
    'A starting point for next time, Sydney. Walk through the solution when you’re ready.',
    'No rush to know it all. This solution is here to help you make a start.',
    'Try following the first step, then see if you can work out the next one yourself.',
    'One step is enough to get started. Take this one at your own pace.'
  ]
};

// Pick once per answer part and retain it with the session so revisiting or
// refreshing does not change the message. Avoid consecutive repeats per outcome.
export function encouragement(session, key, outcome, random = Math.random) {
  session.encouragement ??= {};
  session.lastEncouragement ??= {};
  if (session.encouragement[key]) return session.encouragement[key];
  const choices = messages[outcome].filter(message => message !== session.lastEncouragement[outcome]);
  const message = choices[Math.floor(random() * choices.length)];
  session.encouragement[key] = message;
  session.lastEncouragement[outcome] = message;
  return message;
}
