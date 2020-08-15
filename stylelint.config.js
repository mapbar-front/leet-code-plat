module.exports = {
  extends: [
    'stylelint-config-standard',
    // 度样式属性进行排序格式化
    'stylelint-config-rational-order'
  ],
  plugins: [
    'stylelint-order',
    'stylelint-config-rational-order/plugin'
  ],
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'mixin', 'extend', 'content'
      ]
    }],
    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: ['v-deep']
    }],
    'selector-max-id': null,
    'no-descending-specificity': null
  },
  // 这里在迁移之前， 会把有sass的文件的忽略掉（每个项目配置不一样）
  ignoreFiles: [
    'src/App.vue',
    'node_modules/',
    'lib',
    'dist',
    '.git/',
    'test',
    '**/*.sass',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.PNG',
    '**/*.JPG',
    '**/*.JPEG',
    '**/*.svg',
    '**/*.eot',
    '**/*.svg',
    '**/*.ttf',
    '**/*.woff',
    '**/*.woff2',
    '**/*.otf',
    '**/*.txt',
    '**/*.js',
    '**/*.json',
    '**/*.font',
    '**/*.md',
    '**/*.min.*',
    '.*']
}
