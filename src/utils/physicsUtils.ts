// Calculate the new velocity after a bounce (e.g., wall collision)
export const calculateBounce = (
  velocity: number,
  elasticity: number = 1,
): number => {
  return -velocity * elasticity; // Reverse and scale velocity by elasticity
};

// Apply friction to velocity to slow it down
export const applyFriction = (
  velocity: number,
  friction: number = 0.1,
): number => {
  if (velocity > 0) {
    return Math.max(velocity - friction, 0); // Reduce velocity, ensuring it doesn't go below 0
  } else {
    return Math.min(velocity + friction, 0); // Reduce velocity, ensuring it doesn't go above 0
  }
};

// Check if a dot is within bounds, and adjust velocity if it hits a wall
export const handleWallCollision = (
  position: number,
  velocity: number,
  min: number,
  max: number,
  elasticity: number = 1,
): { position: number; velocity: number } => {
  if (position < min) {
    return { position: min, velocity: calculateBounce(velocity, elasticity) };
  } else if (position > max) {
    return { position: max, velocity: calculateBounce(velocity, elasticity) };
  }
  return { position, velocity };
};
