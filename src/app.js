const express = require('express');
const path = require('path');
const { mainRouter } = require("./routes/main.route");

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(mainRouter);

module.exports = app;