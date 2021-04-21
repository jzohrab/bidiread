# Bidiread

A dead-simple bidirection reader creator.


Hi all, I like the side-by-side-columns format of bilingual readers, and find it a hassle to switch between a foreign-language doc and its translation when reading, so I wrote a short script that knits together two files to create a single html file with the paragraphs aligned correctly.

e.g., given a file "esp.txt" which has a long spanish text, and "eng.txt" which has its translation using Google docs or DeepL or similar, this generates "out.html" with English on the left and Spanish on the right:

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

## Contributing

Contributions would be super if it makes this more useful/pretty/interesting.

Fork; clone; make you changes and be sure to run `npm run test`; PR back to main.

# Deployment

## To github pages

After checking the local site with `npm start`, we can deploy this automatically to a github pages repo by having everything deployed to `docs`.  See ref https://www.sitepoint.com/parcel-hyperapp-github-pages/

`npm run deploy` builds, commits, and pushes.  GH pages take a few moments to update.

# Licensing

Nothing.
