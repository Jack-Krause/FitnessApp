var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
//models if needed
const path = require("path");

app.use(cors());
app.use(bodyParser.json());

const port = 4000;
const host = "127.0.0.1";
const url = "mongodb://localhost:27017";

mongoose.connect(url, {
})
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error("Error connecting to DB", error);
    });

// add static usage if needed (images)

app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
});

// Request methods for CRUDL actions:


