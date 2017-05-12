'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');
var path = require('path');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    if (this.config.get('appName')) {
      this.log(chalk.yellow('App already exists in current dir!'));
      process.exit(0);
    }
    this.argument('appName', {
      type: String,
      required: false
    });
  },

  prompting: function () {
    if (!this.appName) {
      this.log(yosay(
        'Welcome to the awe-inspiring ' + chalk.red('generator-yckoa') + ' generator!'
      ));

      var prompts = [
        {
          type: 'input',
          name: 'appName',
          message: 'APP Name:',
          default: 'helloWorld'
        }
      ];

      return this.prompt(prompts).then(function (props) {
        this.appName = props.appName;
      }.bind(this));
    }
  },

  configuring: function () {
    this.config.set('appName', this.appName);
    this.config.save();
  },

  writing: function () {
    var self = this;
    var statics;
    var templates;

    statics = [
      'src',
      'static',
      'swagger-ui',
      '.gitignore',
      'gulpfile.js',
      'tsconfig.json',
      'package.json'
    ];

    templates = [
      'src/config/environment.ts',
      'src/config/mongodb.ts'
    ]

    // self.sourceRoot(path.join(self.templatePath(), '../../../typescript'));

    statics.forEach(function (glob) {
      self.fs.copy(
        self.templatePath(glob),
        self.destinationPath(glob)
      );
    });
    templates.forEach(function (glob) {
      self.fs.copyTpl(
        self.templatePath(glob),
        self.destinationPath(glob),
        {
          appName: self.appName
        }
      );
    });
  },

  install: function () {
    this.log(chalk.green('Everything is ready!'));
    this.log(chalk.yellow('Run') + ' yarn ' + chalk.yellow('or') + ' npm install ' + chalk.yellow('to install dependencies.'));
  }
});
