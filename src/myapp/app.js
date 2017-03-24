const express = require('express');
const logger = require('morgan');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static('public'));

app.param('id', (req, res, next, id) => {
  let users = ['taguchi', 'fkoji', 'dotinstall'];
  req.params.name = users[id];
  next();
});

app.get('/hello/:id', (req, res) => {
  res.send('hello ' + req.params.name);
});
app.get('/bye/:id', (req, res) => {
  res.send('bye ' + req.params.name);
});

app.listen(3030, () => {
  console.log('Server Starting...');
});
