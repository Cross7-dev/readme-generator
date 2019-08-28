import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy-assets';
import { terser } from 'rollup-plugin-terser';

const externalDependencies = Object.keys(
  require('./package.json').dependencies
);

export default {
  input: './src/index.js',
  output: {
    banner: '#!/usr/bin/env node',
    name: 'readme-generator',
    file: './dist/index.js',
    format: 'cjs',
    assetFileNames: 'src/readme'
  },
  plugins: [
    resolve({
      preferBuiltins: true,
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    copy({
      assets: ['./src/readme']
    }),
    terser({
      output: {
        comments: 'all'
      }
    })
  ],
  external: [externalDependencies],
  onwarn: warning => {
    if (warning.code === 'THIS_IS_UNDEFINED') return;
  }
};
