/* @flow */

import type { Status, Config } from './ui';

const chalk = require('chalk');

const b = chalk.bold.blue;
const r = chalk.bold.red;
const g = chalk.bold.green;
const w = chalk.bold.white;
const p = chalk.hex('#f28fb1');

const printMainMenu = (status: Status, config: Config) => {
  const pigStatus = status.apiUrl
    ? `serving contracts at ${b(status.apiUrl)}`
    : 'initializing...';
  const statusMsg =
    status.message instanceof Error
      ? r(`ERROR: ${status.message.message}`)
      : g(status.message);

  console.log('\x1Bc'); // clear screen
  console.log(`
    ${p('TRUFFLEPIG')} - Serving finest truffles since 2017
    -----------------------------------------------
    Reading contracts from ${b(config.trufflePigOpts.contractDir)}
    Pig ${pigStatus}
  `);
  const eyes = `${status.winkingL ? '-' : 'O'}${status.winkingR ? '-' : 'O'}`;
  /* eslint max-len: 0 */
  console.log(`
    ┈┈${p('┏━╮╭━┓')}┈┈┈┈┈┈┈     What do you want your pig to do?
    ┈┈${p('┃┏┗┛┓┃')}┈┈┈┈┈┈┈     --------------------------------
    ┈┈${p(`╰┓${w(eyes)}┏╯`)}┈┈┈┈┈┈┈
    ┈${p('╭━┻╮╲┗━━━━╮╭╮')}┈     re${b('(d)')}eploy contracts
    ┈${p('┃▎▎┃╲╲╲╲╲╲┣━╯')}┈     start ${b('(t)')}ruffle console
    ┈${p('╰━┳┻▅╯╲╲╲╲┃')}┈┈┈     ${b('(q)')}uit
    ┈┈┈${p('╰━┳┓┏┳┓┏╯')}┈┈┈
    ┈┈┈┈┈${p('┗┻┛┗┻┛')}┈┈┈┈

    ${status.message ? `STATUS: ${statusMsg}` : ''}
  `);
  /* eslint max-len: 1 */
};

module.exports = printMainMenu;
