import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';

export default [
  {
    input: 'js/main.js',
    output: [
      {
        file: 'dist/main.cjs.js',
        format: 'cjs',
      },
      {
        file: 'dist/main.esm.js',
        format: 'es',
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      babel({ babelHelpers: 'bundled', presets: ['@babel/preset-env'] }),
    ],
  },
  {
    input: 'js/Datepicker.js',
    output: [
      {
        file: 'dist/Datepicker.cjs.js',
        format: 'cjs',
      },
      {
        file: 'dist/Datepicker.esm.js',
        format: 'es',
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      babel({ babelHelpers: 'bundled', presets: ['@babel/preset-env'] }),
    ],
  },
  {
    input: 'js/DateRangePicker.js',
    output: [
      {
        file: 'dist/DateRangePicker.cjs.js',
        format: 'cjs',
      },
      {
        file: 'dist/DateRangePicker.esm.js',
        format: 'es',
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      babel({ babelHelpers: 'bundled', presets: ['@babel/preset-env'] }),
    ],
  }
];
