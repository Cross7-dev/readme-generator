const program = require('commander');

import Run from './cli';

program
  .version('0.0.1')
  .name('readme-generator')
  .option('-e, --entry <file>', 'specify the entry file')
  .option('-o, --output <file>', 'specify the output file')
  .option('-t, --template <path>', 'specity a custom template')
  .option('-d, --debug', 'log output readme data');

program.parse(process.argv);

/**
 *
 * @description This project was born mainly to satisfy my desire for knowledge and to simplify my workflow. Being a curious (and also lazy) developer I have always wondered how to avoid wasting my working time to write README.md files who fits perfectly project by project and that's why I wrote a tool to help me simplify and speed up these processes.
 * @version 0.1.2
 * @author Maurizio Battaghini <maurizio.battaghini+tech@gmail.com>
 * @copyright Maurizio Battaghini 2019
 * @file
 *
 */
Run(program);
