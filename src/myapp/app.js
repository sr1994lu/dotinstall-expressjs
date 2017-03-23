const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.static('public'));
app.use((req, res, next) => {
  console.log('my custom middleware!');
  next();
});

app.get('/hello.txt', (req, res) => {
  res.sendfile(require.resolve('./public/hello.txt'));
});

app.listen(3000, () => {
  console.log('Server Starting...');
});
