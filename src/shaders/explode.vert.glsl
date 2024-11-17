precision mediump float;

attribute vec3 position;
attribute vec3 velocity;
uniform float time;

void main() {
    vec3 newPosition = position + velocity * time; // Move based on velocity
    gl_Position = vec4(newPosition, 1.0);
}
