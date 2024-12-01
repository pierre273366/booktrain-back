require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("./model/connection");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var app = express();
const cors = require("cors");
app.use(cors());
var app = express();
var tripsRouter = require("./routes/trips");
var bookingsRouter = require("./routes/bookings");
var cartsRouter = require("./routes/carts");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/trips", tripsRouter);
app.use("/bookings", bookingsRouter);
app.use("/carts", cartsRouter);

module.exports = app;
