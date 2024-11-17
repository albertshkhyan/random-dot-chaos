precision mediump float;

uniform vec3 color;

void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) {
        discard;
    }
    gl_FragColor = vec4(color, 1.0); // Constant color for trails
}
