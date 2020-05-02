const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

// Process application/json
app.use(bodyParser.json())

app.get("/", (res, req) => {
    req.send("fds");
})

app.get("/privacy/", (res, req) => {
    req.send("fds");
})

app.get("/terms/", (res, req) => {
    req.send("fds");
})

app.get('/webhook/', function(req, res) {
    if (req.query['hub.verify_token'] === 'bong') {
        res.send(req.query['hub.challenge'])
    }
    res.send('Error, wrong token')
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});