module.exports = {
  default: {
    require: [
      'steps/**/*.ts',
      'support/**/*.ts'
    ],
    paths: ['features/**/*.feature'],
    requireModule: ['ts-node/register'],
    format: ['progress',
      'allure-cucumberjs/reporter'
    ],
    formatOptions: {
   resultsDir: 'allure-results'
    },
    retry: 1
  }
};