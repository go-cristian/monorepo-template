import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import stripBanner from 'rollup-plugin-strip-banner'
import { terser } from 'rollup-plugin-terser'
// eslint-disable-next-line import/extensions
import packageJson from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: './src/index.ts',
  output: {
    file: packageJson.main,
    name: packageJson.name,
    format: 'umd',
    sourcemap: true,
    globals: {
      classnames: 'classNames',
      react: 'React',
      'react-dom': 'ReactDOM',
      '@emotion/styled': 'styled',
      '@emotion/core': 'core',
    },
  },
  external: [
    ...Object.keys(packageJson.dependencies),
  ],
  plugins: [
    resolve({
      extensions,
    }),
    commonjs({
      include: /node_modules/,
      namedExports: {
        'styled-components/index.js': ['css', 'css.withConfig'],
      },
    }),
    babel({
      extensions,
    }),
    terser(),
    stripBanner(),
  ],
}
