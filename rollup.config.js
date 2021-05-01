import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.ts',
    output: {
      format: 'es',
      file: 'dist/canevas.mjs',
      sourcemap: true,
    },
    plugins: [typescript(), terser()],
  },
]
