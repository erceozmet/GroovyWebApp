const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const itemsRouter = require("./routes/items");

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use("/items", itemsRouter);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/src', 'index.html'));
  });
}

app.listen(port, function(){
  console.log("Port: " + port);
})

module.exports = app;
