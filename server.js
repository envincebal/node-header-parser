var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// Renders Summary home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// This route gets user information
app.get("/api/whoami", (req, res) => {

  // Gets user ip address
  var getClientAddress = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;
  // Gets user language
  var getClientLanguage = req.headers["accept-language"].split(',')[0];
// Gets user software
  var getClientSoftware = req.headers["user-agent"].split(/[\(\)]/)[1];

  var obj = {
    ipaddress: getClientAddress,
    language:  getClientLanguage,
    software: getClientSoftware
  };

  res.send(obj);
});

// Server listens for requests
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});