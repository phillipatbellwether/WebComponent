const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

app.post('/test', (req, res) => {
    res.send([{a:1}, {b:2}]);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
