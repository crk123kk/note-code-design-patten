/**
 * 单例模式的应用场景
 * 数据库的连接池
 * 缓存：为了提高性能
 */

let express = require('express');
let bodyParse = require('body-parser');
let fs = require('fs');
let app = express();
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

// 缓存
// 如果文件过大，读取速度会很慢，这时候利用缓存来避免重复读取的行为
let cache = {};

//返回某个用户的详情
app.get('/user/:id', function (req, res) {
  let id = req.params.id;
  let user = cache[id];
  if (user) {
    res.json(user);
  } else {
    fs.readFile(`./user/${id}.json`, 'utf8', function (err, data) {
      let user = JSON.parse(data);
      cache[id] = user;
      res.json(user);
    });
  }
});

// 写入某个用户详情
app.post('/user', function (req, res) {
  let user = req.body;
  fs.writeFile(`./user/${user.id}.json`, JSON.stringify(user), function (err) {
    console.log(err);
    res.json(user);
  });
});

app.listen(8080);
