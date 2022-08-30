const express = require('express');

const app = express();

app.use('/', (req, res) => {
    res.send("Hello a")
})

app.listen(3000, () => {
    console.log('servidor on');
})