const path = require('path');
const express = require('express');

const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'node_modules', 'animejs', 'lib')));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hewwo Wowld!~ UwU');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
