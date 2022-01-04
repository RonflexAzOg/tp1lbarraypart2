const express = require('express');
const app = express();
const morgan = require('morgan');
const node_env = 'dev';

function portRandom(min, max){
    Math.floor(Math.random() * (max - min)) + min;
}

const port = portRandom(3000, 4000);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Request-Width, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Acces-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
        return res.status(200).json({});
    }
    next();
})

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/ping', (req, res) => {
    res.status(200).json({message: 'pong'});
});

app.listen(port, () => {
    console.log(`listening on port ${port} in ${node_env} mode`);
});