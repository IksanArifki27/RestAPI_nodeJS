var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyparser = require("body-parser");

var indexRouter = require("./routes/index");
var productsRouter = require("./routes/products");
var userRouter = require("./routes/auth");

var app = express();

app.use(logger("dev"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
module.exports = app;
