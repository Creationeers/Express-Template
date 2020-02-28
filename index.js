const express = require('express');

const server = express();

const port = process.env.PORT || 3000;

server.get('/', (req, res) => {
  res.send('Hi');
});

server.listen(port, () => {
  console.log(`Running on port ${port}`);
});
