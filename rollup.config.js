import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'es',
        file: 'dist/canevas.mjs',
        sourcemap: true,
      },
      {
        format: 'cjs',
        file: 'dist/canevas.cjs',
        sourcemap: true,
      },
    ],
    plugins: [typescript(), terser()],
  },
  {
    input: 'types/index.d.ts',
    output: {
      file: 'dist/canevas.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
]
