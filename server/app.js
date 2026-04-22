require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./src/routers/api.routers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true})); // парсинг данных
app.use(express.json());
app.use('/', apiRouter);

app.listen(PORT, () => console.log(`Server was started on PORT ${PORT}`));