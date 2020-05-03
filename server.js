var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
var path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

let FACEBOOK_VERIFY_TOKEN = "any_password";
let FACEBOOK_PAGE_ACCESS_TOKEN = "EAAJkaiWYIfYBAPRlQkhicol0nGNtbyWvcxudI4W3V7jvMwyrO5AqBhV1ZClZBwhxDkJVx1fPw1m1HFCWj7KtCnBS3XKPiwo9Xj77Fz7Fy6RsgjRuK6ww2CpKC6t6ZAbtbKgcgFwrAaaOxUCLck0kr5iZCqqhsZBVP2oq7uwFwhQZDZD";
let FACEBOOK_SEND_MESSAGE_URL = 'https://graph.facebook.com/v2.6/me/messages?access_token=' + FACEBOOK_PAGE_ACCESS_TOKEN;

app.set('port', (process.env.PORT || 5000));


app.get('/webhook/', function(request, response) {
    if (request.query['hub.verify_token'] == FACEBOOK_VERIFY_TOKEN) {
        response.send(request.query['hub.challenge'])
    }
    res.send('Error, wrong token')
});

app.get('/privacy', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'pages', 'privacy.html'));
});

app.post('/webhook', function(req, res) {
    res.send(req.body.object);
});



// app.post('/webhook', function(req, res) {
//     if (req.body.object === 'page') {
//         if (req.body.entry) {
//             req.body.entry.forEach(function(entry) {
//                 if (entry.messaging) {
//                     entry.messaging.forEach(function(messagingObject) {
//                         var senderId = messagingObject.sender.id;
//                         if (messagingObject.message) {
//                             res.send(messagingObject.message);
//                         } else if (messagingObject.postback) {
//                             res.send('Recieved postback');
//                         }
//                     });
//                 } else {
//                     res.send('no message key found');
//                 }
//             });
//         } else {
//             res.send('no entry key found');
//         }
//     } else {

//     }
//     res.status(200).send();
// });

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});