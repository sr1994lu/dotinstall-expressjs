const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const logger = require('morgan');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

// for parsing multipart/form-data
const upload = multer();
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

app.use(logger('dev'));
app.use(express.static('public'));

app.get('/new', (req, res) => {
  res.render('new');
});
app.post('/create', (req, res) => {
  res.send(req.body.name);
});
app.get('/bye/:id', (req, res) => {
  res.send('bye ' + req.params.name);
});

app.listen(3030, () => {
  console.log('Server Starting...');
});
