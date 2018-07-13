var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
var getClientAddress = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;
  res.send({
    ipaddress: getClientAddress,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  });
});

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
