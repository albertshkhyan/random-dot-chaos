import { useRef } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { ShaderMaterial } from "three";
import { shaders } from "../utils/glslUtils";
import { useDotsStore } from "../store/useDotsStore";
import { applyFriction, handleWallCollision } from "../utils/physicsUtils.ts";
import { clamp, mapRange } from "../utils/mathUtils.ts";

// Extend Three.js ShaderMaterial for use in JSX
extend({ ShaderMaterial });

function DotMesh() {
  const dots = useDotsStore((state) => state.dots);
  const speed = useDotsStore((state) => state.speed);
  const ref = useRef<any>();

  const bounds = { min: -5, max: 5 }; // Define the bounds for the canvas

  useFrame(() => {
    if (ref.current) {
      // Rotate the group of dots
      ref.current.rotation.x += 0.001 * speed;
      ref.current.rotation.y += 0.001 * speed;

      // Apply motion, friction, handle collisions, and adjust size for each dot
      dots.forEach((dot) => {
        dot.x += dot.velocityX * speed;
        dot.y += dot.velocityY * speed;
        dot.z += dot.velocityZ * speed;

        // Clamp positions to stay within bounds
        dot.x = clamp(dot.x, bounds.min, bounds.max);
        dot.y = clamp(dot.y, bounds.min, bounds.max);
        dot.z = clamp(dot.z, bounds.min, bounds.max);

        // Apply friction to slow down velocities
        dot.velocityX = applyFriction(dot.velocityX);
        dot.velocityY = applyFriction(dot.velocityY);
        dot.velocityZ = applyFriction(dot.velocityZ);

        // Check for wall collisions and adjust position/velocity
        const xResult = handleWallCollision(
          dot.x,
          dot.velocityX,
          bounds.min,
          bounds.max,
        );
        dot.x = xResult.position;
        dot.velocityX = xResult.velocity;

        const yResult = handleWallCollision(
          dot.y,
          dot.velocityY,
          bounds.min,
          bounds.max,
        );
        dot.y = yResult.position;
        dot.velocityY = yResult.velocity;

        const zResult = handleWallCollision(
          dot.z,
          dot.velocityZ,
          bounds.min,
          bounds.max,
        );
        dot.z = zResult.position;
        dot.velocityZ = zResult.velocity;

        // Dynamically adjust the size based on velocity
        const velocityMagnitude = Math.abs(
          dot.velocityX + dot.velocityY + dot.velocityZ,
        );
        dot.size = mapRange(velocityMagnitude, 0, 0.3, 0.1, 0.5); // Map speed to size
      });
    }
  });

  return (
    <group ref={ref}>
      {dots.map((dot) => (
        <mesh key={dot.id} position={[dot.x, dot.y, dot.z]}>
          <sphereGeometry args={[dot.size || 0.2, 32, 32]} />
          <shaderMaterial
            args={[
              {
                vertexShader: shaders.dot.vertex,
                fragmentShader: shaders.dot.fragment,
                transparent: true,
                opacity: 1,
              },
            ]}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function DotCanvas() {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <DotMesh />
      </Canvas>
    </div>
  );
}
