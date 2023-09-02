import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  externals: [
    '@unocss/preset-mini/utils',
    '@unocss/core',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
