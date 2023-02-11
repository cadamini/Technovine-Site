const replace = require('replace-in-file');
const file = require('file-system');
const options = {
  files: file.readFile("./html-compress.txt"),
  from: /(\t|\s{2,}|\n)/gm,
  to: 'bar',
};