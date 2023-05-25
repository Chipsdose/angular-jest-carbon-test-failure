import type {Config} from 'jest';

const jestConfig: Config = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globalSetup: 'jest-preset-angular/global-setup',
    transformIgnorePatterns: [
    ],
    transform: {
    },
    collectCoverage: true,
    coverageReporters: ['json', 'html', 'lcov', 'text', 'text-summary'],
    coverageDirectory: '<rootDir>/coverage/',
};

export default jestConfig;