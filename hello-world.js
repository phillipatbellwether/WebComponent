const express = require('express');
const app = express();
const port = 3000;

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
