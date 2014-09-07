var fs = require('fs');
var request = require('request');
var program = require('commander');

program
  .version('0.0.1')
  .option('-d, --documentdirectory <documentdirectory>', 'specify the document directory,'
          + ' defaults to crawl/doc/ (MUST END WITH SLASH /)',
          String, 'doc/')
  .option('-e, --endpoint <endpoint>', 'specify the norch endpoint',
          String, 'http://localhost:3030/indexer')
  .option('-f, --filteron <filteron>', 'specify the fields to facet/filter on',
          String, '')
  .parse(process.argv);

var docdir = program.documentdirectory;

var norchFiles = fs.readdirSync(docdir);

var postToNorch = function(path) {
  console.log(path);
  var r = request.post(program.endpoint, function (error, response, body) {
    if (f = norchFiles.pop())
      postToNorch(docdir + f);
  });
  var form = r.form();
  form.append('document', fs.createReadStream(path));
  form.append('filterOn', program.filteron);
}
postToNorch(docdir + norchFiles.pop());

