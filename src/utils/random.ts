// Utility to generate a random color in HSL format
export const randomColor = (): string => {
  return `hsl(${Math.random() * 360}, 80%, 60%)`;
};

// Utility to generate a random position within a range
export const randomPosition = (min: number = -5, max: number = 5): number => {
  return Math.random() * (max - min) + min;
};

// Utility to generate a random velocity for movement (Генерация случайных скоростей.)
export const randomVelocity = (
  min: number = -0.1,
  max: number = 0.1,
): number => {
  return Math.random() * (max - min) + min;
};
