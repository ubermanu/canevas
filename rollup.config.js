import typescript from 'rollup-plugin-typescript';
import { uglify } from 'rollup-plugin-uglify';

export default [
  {
    input: 'src/index.ts',
    plugins: [
      typescript()
    ],
    output: {
      format: 'umd',
      name: 'ng',
      file: 'dist/ng.js'
    }
  },
  {
    input: 'src/index.ts',
    plugins: [
      typescript(),
      uglify()
    ],
    output: {
      format: 'umd',
      name: 'ng',
      file: 'dist/ng.min.js'
    }
  }
];
