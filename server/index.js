const express = require('express');
const cors = require('cors');
const path = require('path');

const mongoose = require('mongoose');

require('dotenv').config();
const env = "" + process.env.NODE_ENV;

const app = express();
const port = process.env.PORT || 8081;
console.log("process.env.PORT: ", process.env.PORT);
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(cors());
app.use(express.json());

const middleware = require("./middleware");
app.use(middleware.cors);

const config = require("./config")[env || "development"];

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.on('connected', () => {
    console.log("MongoDB database connection established successfully");
})

const routes = require("./routes");
app.use("", routes);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

module.exports = app;