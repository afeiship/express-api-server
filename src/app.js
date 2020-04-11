import express from 'express';

const app = express();
const port = process.env.PORT || 4002;
const api = require('./api').default;

app.use(express.json());
app.get('/', api);
app.listen(port, '127.0.0.1');
