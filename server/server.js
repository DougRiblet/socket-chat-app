const express = require('express');
const path = require('path');

let app = express();
let port = process.env.PORT || 3666;

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.listen(port, function(){
  console.log('server running on port ', port);
});

