precision mediump float;

uniform vec3 wallColor;

void main() {
    gl_FragColor = vec4(wallColor, 1.0); // Uniform color for walls
}
