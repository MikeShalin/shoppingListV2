module.exports = {
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,mjs}"
  ],
  "setupFiles": [
    "<rootDir>/config/testSetup.js",
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  "testMatch": [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}",
    "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}"
  ],
  "testEnvironment": "node",
  "testURL": "http://localhost",
  "transform": {
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"
  ],
  "moduleFileExtensions": [
    "web.js",
    "mjs",
    "js",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  "moduleNameMapper": {
    "^react-native$": "react-native-web",
    "^Root(.*)$": "<rootDir>/src$1",
    "^Public(.*)$": "<rootDir>/public/images$1",
    "^Models(.*)$": "<rootDir>/src/models$1",
    "^Features(.*)$": "<rootDir>/src/features$1",
    "^Fixtures(.*)$": "<rootDir>/src/fixtures$1",
    "^Core(.*)$": "<rootDir>/src/core$1",
    "^Utils(.*)$": "<rootDir>/src/utils$1",
    "^Config(.*)$": "<rootDir>/src/config$1",
  }
};
