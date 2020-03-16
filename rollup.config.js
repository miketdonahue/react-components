import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'src/components/button/index.ts',
    output: [
      {
        dir: 'lib/es/button',
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
      {
        dir: 'lib/cjs/button',
        format: 'cjs',
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
        extract: true,
        namedExports: true,
      }),
    ],
  },
];
