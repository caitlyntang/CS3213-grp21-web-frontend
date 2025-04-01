import "@testing-library/jest-dom"; // Adds custom matchers from Testing Library

// Polyfill for TextEncoder and TextDecoder
import { TextEncoder, TextDecoder } from "util";

if (!global.TextEncoder) {
    global.TextEncoder = TextEncoder;
}

if (!global.TextDecoder) {
    global.TextDecoder = TextDecoder;
}