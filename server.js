var express = require('express');
var app = express();

app.use(express.static('public'));

const serveHome = (req, res) => res.sendFile(__dirname + '/views/index.html');

app.get('/', serveHome);
app.get('/periods/:id', serveHome);

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
})
