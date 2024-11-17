precision mediump float;

uniform float time; // Add a uniform for animation over time

void main() {
    vec3 color = vec3(0.5 + 0.5 * sin(time), 0.5, 1.0); // Dynamic color
    gl_FragColor = vec4(color, 1.0); // Apply the color to the fragment
}
