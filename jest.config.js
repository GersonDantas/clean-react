module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!**/*.d.ts'], // quer dizer que eu não quero fazer coverage dele
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1', // resolve o @ para src
    '\\.scss$': 'identity-obj-proxy' // cria um {} todavez que encontrar um arquivo desse, e resolve as importações
  }
}
