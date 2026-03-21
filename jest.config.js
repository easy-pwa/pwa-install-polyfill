module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    moduleNameMapper: {
        "^.+\\.svg$": "<rootDir>/tests/__mocks__/svgMock.js",
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
