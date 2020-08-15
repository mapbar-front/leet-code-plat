const inquirer = require('inquirer')
var cdr = require('child_process')

inquirer.prompt([
  { // 选择就需要执行的脚本
    type: 'list',
    name: 'fieldOption',
    message: '请选择您想初始化的模块类型',
    default: 'none',
    choices: [
      { name: '1.初始化一个新的列表项目', value: 'list' },
      { name: '2.初始化一个新详情项目', value: 'detail' },
      { name: '3.初始化一个新表单项目', value: 'form' }
    ]
  }
])
  .then(answers => {
    if (answers.fieldOption === 'list') {
      cdr.fork('./scripts/list/index.js')
    } else if (answers.fieldOption === 'detail') {
      cdr.fork('./scripts/detail/index.js')
    } else if (answers.fieldOption === 'form') {
      cdr.fork('./scripts/form/index.js')
    } else {
      cdr.fork('./scripts/list/index.js')
    }
  })
