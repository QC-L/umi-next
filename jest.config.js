module.exports = {
  // disable css files mock for bundler-webpack's css import tests
  moduleNameMapper: {},
  collectCoverageFrom(memo) {
    return memo.concat([
      '!packages/bundler-webpack/src/getConfig/setPublicPath.ts',
      '!packages/bundler-webpack/src/webpackHotDevClient/*',
    ]);
  },
};
