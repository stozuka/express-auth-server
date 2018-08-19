const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongooge = require('mongoose');
const cors = require('cors');

// DB setup
mongooge.connect(
  'mongodb://localhost:27017/auth',
  { useNewUrlParser: true }
);

// App setup
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
app.use(cors());
router(app);

// Server setup
const port = process.env.PORT || 3030;
const server = http.createServer(app);
server.listen(port);

console.log('server listening on:', port);
