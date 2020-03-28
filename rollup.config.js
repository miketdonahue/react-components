import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

export default [
  {
    input: 'src/components/button/button.tsx',
    output: [
      {
        dir: 'lib/cjs/button',
        format: 'cjs',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      {
        dir: 'lib/es/button',
        format: 'es',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    ],
    plugins: [
      commonjs(),
      resolve({
        mainFields: ['module', 'main', 'jsnext:main', 'browser'],
        extensions: ['.ts', '.tsx'],
      }),
      postcss({
        modules: true,
        extract: true,
      }),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.ts', '.tsx'],
      }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/components/tooltip/tooltip.tsx',
    output: [
      {
        dir: 'lib/cjs/tooltip',
        format: 'cjs',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      {
        dir: 'lib/es/tooltip',
        format: 'es',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    ],
    plugins: [
      commonjs(),
      resolve({
        mainFields: ['module', 'main', 'jsnext:main', 'browser'],
        extensions: ['.ts', '.tsx'],
      }),
      postcss({
        modules: true,
        extract: true,
      }),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.ts', '.tsx'],
      }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/components/index.ts',
    output: [
      {
        file: pkg.browser,
        format: 'umd',
        name: 'react-components',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      {
        file: pkg.main,
        format: 'cjs',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      {
        file: pkg.module,
        format: 'es',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    ],
    plugins: [
      commonjs(),
      resolve({
        mainFields: ['module', 'main', 'jsnext:main', 'browser'],
        extensions: ['.ts', '.tsx'],
      }),
      postcss({
        modules: true,
        extract: true,
      }),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.ts', '.tsx'],
      }),
    ],
    external: ['react', 'react-dom'],
  },
];
