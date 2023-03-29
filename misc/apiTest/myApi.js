const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const port = 5500;
app.listen(port, () => {
    console.log("webserver listening on port " + port);
});

app.get("/testApi", async function (req, resp){
    resp.header("Access-Control-Allow-Origin", "*");
    resp.status(200).send(
        {
            testField : "testValue",
            testFieldTwo : "anotherValue"
        });
});


