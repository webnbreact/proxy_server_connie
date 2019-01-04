const express = require('express');
const morgan = require('morgan');
const path = require('path');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('dev'));
app.use('/rooms/:roomId', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`server running on ${port}`)
})