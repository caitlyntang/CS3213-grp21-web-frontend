export default {
    testEnvironment: "jsdom", // Use jsdom for browser-like testing
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"], // Add global setup file
    transform: {
        "^.+\\.jsx?$": "babel-jest", // Ensure proper transpilation
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
};