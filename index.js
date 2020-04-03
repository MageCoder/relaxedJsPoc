const HTML2PDF = require('./lib/html2pdf.js');

(async () => {
    await HTML2PDF._initializePlugins();
    await HTML2PDF.pdf('./templates/test.pug', {"a":"b", "c":"d"});

})();