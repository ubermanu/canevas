import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.ts',
    output: {
      format: 'umd',
      name: 'cc',
      file: 'dist/canevas.js',
    },
    plugins: [typescript()],
  },
  {
    input: 'src/index.ts',
    output: {
      format: 'umd',
      name: 'cc',
      file: 'dist/canevas.min.js',
    },
    plugins: [typescript(), terser()],
  },
  {
    input: 'src/index.ts',
    output: {
      format: 'es',
      file: 'dist/canevas.mjs',
    },
    plugins: [typescript()],
  },
]
