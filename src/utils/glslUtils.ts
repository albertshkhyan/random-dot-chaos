// Utility to load GLSL shader code
export const loadShader = (shader: string): string => {
  // Trims extra spaces and ensures clean GLSL code is returned
  return shader.trim();
};

// Preloaded shaders: Import your GLSL shader files
import dotVertexShader from "../shaders/dot.vert.glsl";
import dotFragmentShader from "../shaders/dot.frag.glsl";
import glowVertexShader from "../shaders/glow.vert.glsl";
import glowFragmentShader from "../shaders/glow.frag.glsl";
import trailVertexShader from "../shaders/trail.vert.glsl";
import trailFragmentShader from "../shaders/trail.frag.glsl";
import wallVertexShader from "../shaders/wall.vert.glsl";
import wallFragmentShader from "../shaders/wall.frag.glsl";
import explodeVertexShader from "../shaders/explode.vert.glsl";
import explodeFragmentShader from "../shaders/explode.frag.glsl";

// Consolidate all shaders into an object for easy access
export const shaders = {
  dot: {
    vertex: loadShader(dotVertexShader),
    fragment: loadShader(dotFragmentShader),
  },
  glow: {
    vertex: loadShader(glowVertexShader),
    fragment: loadShader(glowFragmentShader),
  },
  trail: {
    vertex: loadShader(trailVertexShader),
    fragment: loadShader(trailFragmentShader),
  },
  wall: {
    vertex: loadShader(wallVertexShader),
    fragment: loadShader(wallFragmentShader),
  },
  explode: {
    vertex: loadShader(explodeVertexShader),
    fragment: loadShader(explodeFragmentShader),
  },
};
