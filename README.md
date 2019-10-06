# JavaScript Practice

This repository has resolutions for the exercises proposed on [Eloquent JavaScript](https://eloquentjavascript.net/), a book by Marijn Haverbeke, 2nd Edition.

To execute the code from the `src` folder with NodeJS, you should compile the code with Babel.

```bash
$ git clone https://github.com/thebinaryfelix/eloquent-javascript-exercises.git
# done clonning
$ npm install
# installed dependencies
$ npm run build
```

A `dist` folder will be created on the root directory. There, the code can be executed using `node` command.

`node dist/chapters/chapter{number}/{filename.js}`

## Tests

Tests can be found inside `src/chapters/.../__tests__`

### Running tests

```bash
npm test
```
