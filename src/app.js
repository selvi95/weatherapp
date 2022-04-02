require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

var port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var geocode = require("../utils/geocode");
var forecast = require("../utils/forecast");


app.get("/", function (req, res) {
    res.send("Welcome to weatherapp");
})

app.get("/api/weather", function (req, res) {
    // console.log("req.body", req.body);
    console.log("req.query.city", req.query.city);
    geocode(req.query.city, function (geocodeRes) {
        forecast(geocodeRes, function (forecastRes) {
            console.log("forecastRes", forecastRes);
            res.status(200).send({
                geocode: geocodeRes,
                forecast: forecastRes
            });
        })
    })
})

app.listen(port, function () {
    console.log("Server up on port 4000");
})

