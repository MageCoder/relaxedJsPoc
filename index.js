const HTML2PDF = require('./lib/html2pdf.js');
const program = require('commander');
const version = require('./package.json').version

program
  .version(version)
  .option('--bo, --build-once', 'Build once only, do not watch');

  // ARGUMENTS PARSING AND SETUP
console.debug(process.argv);
program.parse(process.argv);
console.debug(program);


(async () => {
    await HTML2PDF._initializePlugins();
    await HTML2PDF.pdf('./templates/test.pug', {"a":"b", "c":"d"});

    if (program.buildOnce) {
        process.exit(0)
    } 
})();