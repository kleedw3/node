const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the HOMEPAGE");
});

const port = process.env.port ||  3000;
app.listen(port, () => {
    console.log("Kevin says Hello :)");
});


