'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  // 初始化：信息提示 状态检测
  initializing() {
    this.log(yosay(`初始化 ${chalk.red('Elon Mobile App')} 模板`));
  }

  // 用户交互：完成基础信息获取
  async prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'appname',
        message: '请输入应用名',
        default: this.appname, // Default to current folder name
      },
      {
        type: 'list',
        name: 'type',
        message: '请选择项目类型',
        choices: [
          {
            name: '移动应用',
            value: 'webapp',
          },
          {
            name: '官网',
            value: 'homepage',
          },
          {
            name: '管理后台',
            value: 'manager',
          },
          {
            name: '钉钉应用',
            value: 'dingtalk',
          },
        ],
      },

      {
        type: 'list',
        name: 'system',
        message: '请选择系统',
        choices: [
          {
            name: 'macOS',
            value: 'mac',
          },
          {
            name: 'windows',
            value: 'windows',
          },
        ],
      },
    ];

    this.answers = await this.prompt(prompts);
  }
  // Saving configurations and configure the project (creating .editorconfig files and other metadata files)
  configuring() {}
  // If the method name doesn’t match a priority, it will be pushed to this group.
  default() {}
  // Where you write the generator specific files (routes, controllers, etc)
  writing() {
    this.fs.copy(
      // 将上面的修改成下面这样，意思是在执行脚手架生成的时候
      // 将templates模版下的所有文件复制到当前路径下
      // 具体可查看文档 https://yeoman.github.io/generator/actions_fs.html#.copyTemplate
      this.templatePath(`${this.answers.type}/**`),
      this.destinationPath('./'),
      {
        globOptions: {
          dot: true, // 意为匹配带.的文件
          nodir: true, // 注：该选项意为不匹配空目录，强制为true，可以不写
        },
      },
    );

    // 配置 defaultSetting;
    const stream = this.fs.read(this.templatePath(`./defaultSettings.js`));

    const matchReg = new RegExp(`%ELONWU%`, 'gi');

    const contents = stream.replace(matchReg, `${this.answers.appname}`);

    this.fs.write(this.destinationPath('./defaultSettings.js'), contents);

    // 配置 webpack.dev;
    this.fs.copy(
      this.templatePath(`./${this.answers.system}.webpack.dev.js`),
      this.destinationPath('./webpack.dev.js'),
    );
  }
  // Where conflicts are handled (used internally)
  conflicts() {}
  // Where installations are run (npm, bower)
  install() {}
  // Called last, cleanup, say good bye, etc
  end() {
    this.log(`${chalk.green('项目创建成功')}`);
  }
};
