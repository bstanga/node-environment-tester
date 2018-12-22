var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Working 17");
});

app.get("/crash", function(req, res) {
    process.nextTick(function() {
        throw new Error();
    });
    res.send("I think it crashed");
});

app.get("/wait", function(req, res) {
    setTimeout(() => {
        res.send("Finally");
    }, 10000);
});

app.listen(8080, function() {
    console.log("Listening on port:" + 8080);
});
