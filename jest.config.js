
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
      "^.+\\.tsx?$": "ts-jest" 
  // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    '\\.css$': '<rootDir>/styleMock.js',  // Mock CSS imports
  },
}