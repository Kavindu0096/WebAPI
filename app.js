const PORT = 3000
const auth = require('./MiddleWare/auth')
const heroes = require("./routes/heroes")
const villain = require("./routes/villain")
const main = require("./routes/main")
var express = require('express');
var app = express();

app.use(express.json());
app.use(auth);
app.use("/", main)
app.use('/api/heroes', heroes);
app.use('/api/villain', heroes);


app.listen(PORT, function () {
    console.log('App runs on port', PORT);
});

