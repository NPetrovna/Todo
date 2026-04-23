require('dotenv').config();

const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const apiRouter = require('./src/routers/api.routers');
const FileStore = require('session-file-store')(session);

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const sessionConfig = {
  name: 'TodoCookieReact',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET || 'todosiki',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 60*1000*60,
    httpOnly: false,
  },
};

const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    optionsSuccessStatus: 200,
    credentials: true,
};

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true})); // парсинг данных
app.use(express.json());
app.use(cors(corsOptions));
app.use(session(sessionConfig));
app.use('/', apiRouter);

app.listen(PORT, () => console.log(`Server was started on PORT ${PORT}`));