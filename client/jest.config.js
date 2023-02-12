const config = {
  collectCoverageFrom: ["<rootDir>/src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["js", "mjs", "jsx", "ts", "tsx", "json"],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  notify: true,
  notifyMode: "success-change",
  resetMocks: true,
  roots: ["<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
  ],
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":
      "<rootDir>/jest/fileTransform.js",
    "^.+\\.[jt]sx?$": "babel-jest",
    "^.+\\.css$": "<rootDir>/jest/cssTransform.js",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  verbose: true,
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};

module.exports = config;
