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
      name: 'cc',
      file: 'dist/cc.js'
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
      name: 'cc',
      file: 'dist/cc.min.js'
    }
  }
];
