import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

export default [
  {
    input: 'src/components/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.ts', '.tsx'],
      }),
      resolve({
        extensions: ['.ts', '.tsx'],
      }),
      commonjs(),
      postcss({
        modules: true,
      }),
    ],
  },
  {
    input: 'src/components/button/index.ts',
    output: [
      {
        dir: 'lib/button',
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.ts', '.tsx'],
      }),
      resolve({
        extensions: ['.ts', '.tsx'],
      }),
      commonjs(),
      postcss({
        modules: true,
        extract: 'lib/button/button.module.css',
      }),
    ],
  },
];
