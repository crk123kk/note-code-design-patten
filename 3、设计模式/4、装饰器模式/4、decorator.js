let express = require('express');
let app = express();

let goods = {};
app.get('/report', function (req, res) {
  let name = req.query.name;
  if (goods[name]) {
    goods[name]++;
  } else {
    goods[name] = 1;
  }
  console.log('name :>> ', name);
  res.send(goods);
});

app.get('/', function (req, res) {
  res.json(goods);
});
app.listen(3000);
