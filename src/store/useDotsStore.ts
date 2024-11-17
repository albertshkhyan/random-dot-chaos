import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { removeItemAtIndex, shuffleArray } from "../utils/arrayUtils";
import { mapRange } from "../utils/mathUtils.ts";

// Types for the dot properties
export interface Dot {
  id: string;
  x: number;
  y: number;
  z: number;
  velocityX: number;
  velocityY: number;
  velocityZ: number;
  color: string;
  size: number; // New size property for each dot
}

// Zustand store interface
interface DotStore {
  dots: Dot[];
  speed: number;
  addDots: (count: number) => void;
  updateSpeed: (multiplier: number) => void;
  resetState: () => void;
  removeDot: (index: number) => void; // New action to remove a dot
  shuffleDots: () => void; // New action to shuffle dots
}

// Utility function to create a random dot
const createDot = (): Dot => ({
  id: crypto.randomUUID(),
  x: mapRange(Math.random(), 0, 1, -5, 5), // Map random value to position range
  y: mapRange(Math.random(), 0, 1, -5, 5),
  z: mapRange(Math.random(), 0, 1, -5, 5),
  velocityX: mapRange(Math.random(), 0, 1, -0.1, 0.1), // Map velocity to a defined range
  velocityY: mapRange(Math.random(), 0, 1, -0.1, 0.1),
  velocityZ: mapRange(Math.random(), 0, 1, -0.1, 0.1),
  color: `hsl(${Math.random() * 360}, 80%, 60%)`,
  size: mapRange(Math.random(), 0, 1, 0.1, 0.5),
});
// Create Zustand store with devtools and persist middleware
export const useDotsStore = create<DotStore>()(
  devtools(
    persist(
      (set) => ({
        dots: [],
        speed: 1,
        addDots: (count: number) =>
          set(
            (state) => ({
              dots: [
                ...state.dots,
                ...Array.from({ length: count }, createDot),
              ],
            }),
            false,
            "DotsStore/addDots",
          ),
        updateSpeed: (multiplier: number) =>
          set(
            (state) => ({
              speed: state.speed * multiplier,
              dots: state.dots.map((dot) => ({
                ...dot,
                size: mapRange(
                  dot.velocityX + dot.velocityY + dot.velocityZ,
                  -0.3,
                  0.3,
                  0.1,
                  0.5,
                ), // Adjust size dynamically based on velocity
              })),
            }),
            false,
            "DotsStore/updateSpeed",
          ),
        resetState: () =>
          set(
            {
              dots: [],
              speed: 1,
            },
            false,
            "DotsStore/resetState",
          ),
        removeDot: (index: number) =>
          set(
            (state) => ({
              dots: removeItemAtIndex(state.dots, index),
            }),
            false,
            "DotsStore/removeDot",
          ),
        shuffleDots: () =>
          set(
            (state) => ({
              dots: shuffleArray(state.dots),
            }),
            false,
            "DotsStore/shuffleDots",
          ),
      }),
      {
        name: "dots-storage",
        partialize: (state) => ({ dots: state.dots, speed: state.speed }),
      },
    ),
    { name: "DotsStore", trace: true },
  ),
);
