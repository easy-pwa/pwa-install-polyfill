module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    moduleNameMapper: {
        "^.+\\.svg$": "jest-svg-transformer",
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
