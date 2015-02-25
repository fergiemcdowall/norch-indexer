norch-indexer
==============

An indexing tool for Norch.js

```
$ norch-indexer --help

  Usage: norch-indexer [options]

  Options:

    -h, --help                                   output usage information
    -V, --version                                output the version number
    -d, --documentdirectory <documentdirectory>  specify the document directory, defaults to crawl/doc/ (MUST END WITH SLASH /)
    -e, --endpoint <endpoint>                    specify the norch endpoint
    -f, --filteron <filteron>                    specify the fields to facet/filter on
```

Push docs to norch by doing something similar to:

`$ norch-indexer -d testdata/ -e http://localhost:3030/indexer -f places,topics,organisations`

[![NPM](https://nodei.co/npm/norch-indexer.png?stars&downloads)](https://nodei.co/npm/norch-indexer/)

[![NPM](https://nodei.co/npm-dl/norch-indexer.png)](https://nodei.co/npm/norch-indexer/)
