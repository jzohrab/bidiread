# Bidiread

A dead-simple bidirection reader creator.

Given two text box inputs, this html outputs a simple bidirectional reader with the paragraphs aligned correctly.

![Alt text](/img/sample.png?raw=true "Sample")

**Demo is running at https://jzohrab.github.io/bidirect/**

# Development

## Overview

This project uses Parcel for bundling the site.

## Requirements

node - v14.16.0
npm - 6.14.11

I haven't tried other versions, but the above worked for me on my Mac.

## Getting started

```
git clone <this repo>
cd <repo path>
npm install

# Build and start the local Parcel server
npm start

# Then go to the local address it tells you
```

## Tests

We use `tape` for tests.  https://github.com/substack/tape

`npm run test`

Currently, there's a single stub test.  Any extensive js code should have tests.

## Contributing

Contributions would be super if it makes this more useful/pretty/interesting.

Fork; clone; make you changes and be sure to run `npm run test`; PR back to main.

# Deployment

## To github pages

After checking the local site with `npm start`, we can deploy this automatically to a github pages repo by having everything deployed to `docs`.  See ref https://www.sitepoint.com/parcel-hyperapp-github-pages/

`npm run deploy` builds, commits, and pushes.  GH pages take a few moments to update.

# Licensing

Nothing.
