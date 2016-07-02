var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

//OpenWeatherMap middleware to redirect all traffic to http: not https:

// req.headers['x-forwarded-proto'] is now equivalent to -> req.protocol

app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Mead - React. Express server is running on 3000.');
});
