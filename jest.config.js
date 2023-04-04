export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/src/**/*.{spec,test,e2e}.{js,jsx,ts,tsx}'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
};
