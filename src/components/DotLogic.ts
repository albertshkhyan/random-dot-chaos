import { Dot } from "../store/useDotsStore";
import { randomPosition, randomVelocity, randomColor } from "../utils/random";

export function createDot(): Dot {
  return {
    id: crypto.randomUUID(),
    x: randomPosition(),
    y: randomPosition(),
    z: randomPosition(),
    velocityX: randomVelocity(),
    velocityY: randomVelocity(),
    velocityZ: randomVelocity(),
    color: randomColor(),
  };
}

export function moveDot(dot: Dot, speed: number): Dot {
  return {
    ...dot,
    x: dot.x + dot.velocityX * speed,
    y: dot.y + dot.velocityY * speed,
    z: dot.z + dot.velocityZ * speed,
  };
}
