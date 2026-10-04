const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const msg = process.env.SECRET_MESSAGE || 'not set';
  res.send(`Hello from Hanafi! Secret message: ${msg}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});