const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const logger = require('morgan');
const methodOverride = require('method-override');
const app = express();
const post = require('./routes/post');

app.set('views', './views');
app.set('view engine', 'ejs');

// for parsing multipart/form-data
const upload = multer();
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(logger('dev'));

app.get('/', post.index);
app.get('/posts/:id([0-9]+)', post.show);
app.get('/posts/new', post.new);
app.post('/posts/create', post.create);
app.get('/posts/:id/edit', post.edit);

// app.delete('/posts/:id/', post.destroy);
// app.put('/posts/:id/', post.update);

app.listen(3030, () => {
  console.log('Server Starting...');
});
