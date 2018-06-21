Reflect.parse WebExtensions API experiment [![Unlicensed work](https://raw.githubusercontent.com/unlicense/unlicense.org/master/static/favicon.png)](https://unlicense.org/)
========================================

This repo contains a pair of extensions and one demo webapp.
* `experiment` directory contains the source of the [experimental WebExtensions API](https://firefox-source-docs.mozilla.org/toolkit/components/extensions/webextensions/index.html) for passing [Reflect.parse API](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API) into WebExtensions. **Install it first.** [`nightly.link`](https://nightly.link/KOLANICH/webext-experiment-parse/workflows/CI/master/experiment.xpi)
* `extension` directory contains a simple extension injecting the API into every webpage. [`nightly.link`](https://nightly.link/KOLANICH/webext-experiment-parse/workflows/CI/master/extension.xpi)
* `page` contains a simple webapp parsing JS source into an AST and showing that AST as pretty-printed JSON. Unfortunately, `document_start` doesn't work, so the app will likely say that the API is not present.
