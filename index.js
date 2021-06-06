const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing

var tasks = [];

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/src/html/index.html'));
});

app.get('/src/js/index.js', function(req, res) {
  res.sendFile(path.join(__dirname, '/src/js/index.js'));
});

app.get('/get', (req, res) => {
  res.json({"list": tasks });
})

app.post('/add', (req, res) => {
  res.send('post');
  let list = req.body.list;
  console.log(list);
  Array.prototype.push.apply(tasks, list);
  console.log(tasks);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
