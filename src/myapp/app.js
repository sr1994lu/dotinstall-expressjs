const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About This Page!');
});

app.listen(3000, () => {
  console.log('Server Starting...');
});
