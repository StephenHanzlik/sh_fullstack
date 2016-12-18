'use strict';

const express = require('express');
const app = express();
var messages = require('./routes/messages');
//
// app.use(express.static('public'));

app.use('/messages', messages);


app.get('/', (req, res, next) => {
  res.sendStatus(200);
});

app.listen('3000', function() {
  console.log("Listening on port 3000");
});
