const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const logger = require('morgan');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const csurf = require('csurf');

const app = express();
const post = require('./routes/post');

// trust first proxy
app.set('trust proxy', 1);

app.set('views', './views');
app.set('view engine', 'ejs');

// **************************************************
// **                 middleware                   **
// **************************************************
// for parsing multipart/form-data
const upload = multer();
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// override with POST having _method= PUT or DELETE
app.use(methodOverride(post.method));

// **************************************************
// **                    csrf                      **
// **************************************************
app.use(cookieParser());
app.use(session({
  secret: 'keyboardCat',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true},
}));
app.use(csurf());
app.use((request, response, next) => {
  response.locals.csrfToken = request.csrfToken();
  next();
});

app.use(logger('dev'));

app.get('/', post.index);
app.get('/posts/:id([0-9]+)', post.show);
app.get('/posts/new', post.new);
app.post('/posts/create', post.create);
app.get('/posts/:id/edit', post.edit);
app.put('/posts/:id', post.update);
app.delete('/posts/:id', post.destroy);

app.listen(3030, () => {
  console.log('Server Starting...');
});
