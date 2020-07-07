export function countsAsYes(word) {
    const firstLetter = word.charAt(0).toLowerCase();
    const isAY = firstLetter === 'Y'; 
    return isAY;
}