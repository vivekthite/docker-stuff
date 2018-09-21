const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const PORT=8080;
const client = redis.createClient({
    host: 'redis-server'
});
client.set('visits',0);


app.get('/' ,(req,res) => {
    process.exit(1);
    client.get('visits',(err,reply) => {
        let visits = parseInt(reply)+1;
        client.set('visits',visits);
        res.send('Total visits : '+visits);
    });
});

app.listen(PORT,() => {
    console.info('Server started on port '+PORT);
});