import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
// import image from 'rollup-plugin-image'
import image from 'rollup-plugin-img'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  // All the used libs needs to be here
  external: [
    'react',
    'react-proptypes'
  ],
  plugins: [
    image({
      hash: true,
      output: `dist/images`,
      extensions: /\.(png|jpg|jpeg|gif|svg)$/,
      _slash: true,
      limit: 900000
    }),
    external(),
    postcss({
      plugins: [],
      modules: false,
      extract: true,
    }),
    url(),
    babel({
      babelrc: false,
      presets: [['es2015', { modules: false }], 'stage-1', 'react'],
      plugins: ['external-helpers', 'transform-react-jsx'],
      exclude: [
        'node_modules/**',
        'src/**.stories.js',
        'src/**/**.stories.js',
        'src/**/**/**.stories.js'
      ]
    }),
    resolve({
      browser: true
    }),
    commonjs({
      namedExports: {
        'node_modules/draft-js/lib/Draft.js': ['BlockMapBuilder', 'convertFromHTML', 'ContentBlock', 'CharacterMetadata', 'genKey', 'DefaultDraftInlineStyle', 'KeyBindingUtil', 'Modifier', 'SelectionState', 'CompositeDecorator', 'ContentState', 'EditorState', 'convertToRaw', 'DefaultDraftBlockRenderMap', 'getDefaultKeyBinding', 'Editor']
      }
    })
  ]
}
