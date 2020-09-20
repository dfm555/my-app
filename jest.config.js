module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.(css|styl|less|sass|scss)$": "<rootDir>/config/jest/cssTransform.js",
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|less|sass|scss)$",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  verbose: true,
  snapshotSerializers: ["enzyme-to-json/serializer"],
  coverageDirectory: "coverage",
}
