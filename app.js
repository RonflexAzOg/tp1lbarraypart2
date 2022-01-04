const express = require('express');

const app = express();

app.use((req, res) => {
    console.log(port)
});

app.use('/ping', (req, res) => {
    res.status(200);
    res.json({ message : 'pong'});
});

module.exports = app;