// Utility to safely remove an item from an array by index
export const removeItemAtIndex = <T>(array: T[], index: number): T[] => {
  return array.filter((_, i) => i !== index);
};

// Utility to shuffle an array (useful for randomizing dots)
export const shuffleArray = <T>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};
