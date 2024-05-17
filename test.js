    
var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send(
        "<p>안녕하세요</p>"
    )
})
app.listen(3000, (err)=> {
    console.log(3000);
})
