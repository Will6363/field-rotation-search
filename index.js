
// import packages and set static values
const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');
const PORT = 3000;

// Define a route & and load corresponding file
app.get('/', (req, res) => {
    fs.readFile('index.html', function(err, data) {
        res.status(200);
        res.set('Content-Type', 'text/html')
        res.write(data);
        return res.end();
    });
    // res.send('Welcome to the Express.js Tutorial');
});

app.get('/package', (req, res) => {
    fs.readFile('package.json', function(err, data) {
        res.status(200);
        res.set('Content-Type', 'text/plain')
        res.write(data);
        return res.end();
    });
});

// start the server on a port
app.listen(PORT, (err) => {
    if (!err) {
        console.log('Server is now running on port: ' + PORT);
    }
    else {
        console.log('Error has occured: ' + err)
    }
});

// listen for event emitter or send button to send user request with params

// route for post call to pass params to server
app.use(express.json());
app.post('/', (req, res) => {
    const {name} = req.body;
    res.send(`Welcome ${name}`);
})

// get response from server of list of matching objects

// listen to selection event of one of the items in the list

// pass selection to server and wait for additional information

// get response from server for image and angle range and current pos

// begin real time calculation of angle & angluar velocity

// hook into n.i.n.a or phd2 and rotator driver to actively guide the rotation