module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/.next/',
        '^.+\\.module\\.(css|sass|scss)$',
        '/src/types/',
        '/src/mocks/',
        '.*\\.d\\.ts$',
        '<rootDir>/src/index.tsx',
        '<rootDir>/src/setupTests.ts',
        '/__tests__/', // Excluye los directorios __tests__ de la cobertura
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '/.next/',
    ],
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)'
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};