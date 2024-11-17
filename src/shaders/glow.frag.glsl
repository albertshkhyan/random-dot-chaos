precision mediump float;

uniform vec3 color;

void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    float intensity = smoothstep(0.5, 0.0, dist); // Soft glow effect
    gl_FragColor = vec4(color * intensity, intensity);
}
