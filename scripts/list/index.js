const inquirer = require('inquirer')
const Metalsmith = require('metalsmith')
const fs = require('fs')
const path = require('path')
const render = require('consolidate').ejs.render

inquirer.prompt([
  {
    type: 'input',
    name: 'fieldName',
    message: '请输入当前列表项目的名称（英文），会成为该项目文件夹的名字',
    validate (input) {
      const done = this.async()
      if (!input) {
        done('请输入项目名称')
        return
      }
      if (!/^[a-z0-9]+$/i.test(input)) {
        done('项目名称只能由大小写字母组成！')
        return
      }
      if (fs.existsSync(path.resolve(__dirname, `../../src/views/${input}`))) {
        done('该项目名称已存在，请重新输入')
        return
      }
      done(null, true)
    }
  }
]).then(answers => {
  Metalsmith(__dirname)
    .source('./template')
    .destination(`../../src/views/${answers.fieldName}`)
    .use((files, metalsmith, done) => {
      var keys = Object.keys(files)
      keys.forEach(fileName => {
        var str = files[fileName].contents.toString()
        render(str, answers, function (err, res) {
          if (err) return done(err)
          files[fileName].contents = Buffer.from(res)
        })
      })
      done()
    })
    .build(function (err) {
      if (err) throw err
      console.log('基本框架创建成功')
    })
})
