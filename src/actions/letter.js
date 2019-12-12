export function moveLetter(target, currentLetter) {
  return {
    type: "MOVE_LETTER",
    target: target,
    currentLetter: currentLetter
  };
}

export function currentLetterDragged(letter, targetId) {
  return {
    type: "CURRENT_LETTER",
    letter: letter,
    targetId: targetId
  };
}
