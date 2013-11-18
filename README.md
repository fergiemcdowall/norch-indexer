forage-indexer
==============

An indexing tool for Forage.js

```
$ forage-indexer --help

  Usage: forage-indexer [options]

  Options:

    -h, --help                                   output usage information
    -V, --version                                output the version number
    -d, --documentdirectory <documentdirectory>  specify the document directory, defaults to crawl/doc/ (MUST END WITH SLASH /)
    -e, --endpoint <endpoint>                    specify the forage endpoint
    -f, --filteron <filteron>                    specify the fields to facet/filter on
```

Push docs to forage by doing something similar to:

`$ forage-indexer -d testdata/ -f places,topics,organisations`

[![NPM](https://nodei.co/npm/forage-indexer.png?stars&downloads)](https://nodei.co/npm/forage-indexer/)

[![NPM](https://nodei.co/npm-dl/forage-indexer.png)](https://nodei.co/npm/forage-indexer/)
