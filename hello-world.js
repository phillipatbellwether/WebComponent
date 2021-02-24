const express = require('express');
const app = express();
const port = 3000;

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function() {
  db.run("CREATE TABLE lorem (info TEXT)");

  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});

db.close();












app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname });
});

app.get('/list.js', (req, res) => {
    res.sendFile('./list.js', {root: __dirname });
});

app.post('/test', (req, res) => {
    res.send([{a:1}, {b:2}]);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
