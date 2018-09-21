const express = require('express');

const app = express();
const PORT = 8080;

app.get('/',(req,res) => {
    console.info('Request from : '+req.ip);
    res.send('Hi ... This is simple web');
});

app.listen(PORT,() => {
    console.info('Application started at port :'+PORT);
});