import 'replace-in-file';

const replace = require('replace-in-file');
const options = {
  files: './compress.txt',
  from: /(\t|\s{2,}|\n)/gm,
  to: 'bar',
};