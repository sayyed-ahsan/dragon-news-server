const { request } = require('express');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const catagoris = require('./data/catagoris.json')

app.get('/', (req, response) => {
    response.send('new api running')
});

app.get('/news-categoris', (req, response) => {
    response.send(catagoris)
});

app.listen(port, () => {
    console.log('ppp', port)
})

