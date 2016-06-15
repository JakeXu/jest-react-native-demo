'use strict';

const babel = require('babel-core');
const jestPreset = require('babel-preset-jest');
const reactPreset = require('babel-preset-react');
const reactNativePreset = require('babel-preset-react-native');

module.exports = {
  process(src, filename) {
    if (babel.util.canCompile(filename)) {
      return babel.transform(src, {
        filename,
        presets: [jestPreset, reactNativePreset],
        retainLines: true,
      }).code;
    }
    return src;
  },
};
