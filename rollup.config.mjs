import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';

const packageJson = await import('./package.json', { assert: { type: "json" } });

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.default.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJson.default.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript()]
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  }
];
