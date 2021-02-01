export function countsAsYes(word) {
    const firstLetter = word.charAt(0).toLowerCase();
    const isAY = firstLetter === 'y'; 
    return isAY;
}

export function findPercentage(score, available) {
    return Math.floor((score / available) * 100);
} 