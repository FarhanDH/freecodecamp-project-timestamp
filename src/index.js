// index.js
// where your node app starts

// init project
const express = require('express');
const router = require('./routes/timestamp.routes');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// api endpoint
app.use('/', router);

// listen for requests :)
const listener = app.listen(3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
