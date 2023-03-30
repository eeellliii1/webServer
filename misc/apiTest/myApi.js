const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

console.log("Body Parser Setup");

const port = 5500;
app.listen(port, () => {
    console.log("webserver listening on port " + port);
});

console.log("Port Opened");

app.get("/testApi", async function (req, resp){

    console.log("Request Recieved for /testApi");

    resp.header("Access-Control-Allow-Origin", "*");
    resp.status(200).send(
        {
            testField: "testValue",
            testFieldTwo: "anotherValue"
        });

    console.log("Response Sent for /testApi");
});


