const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(express.json())
app.use(bodyParser.json())

const routes = require('./src/routes')
app.use('/', routes)

const mongoose = require('./src/mongoose')



app.listen(3000, () => {
    console.log('[SERVER] SERVIDOR IS RUN');
})