const express = require('express');
const logger = require('morgan');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {title: 'title'});
});

app.listen(3030, () => {
  console.log('Server Starting...');
});
