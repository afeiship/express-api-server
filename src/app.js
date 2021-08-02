import express from 'express';

const app = express();
const port = process.env.PORT || 4002;
const api = require('./api').default;

app.use(express.json());
app.get('/hello', api);
app.listen(port);
