const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");

const app = express();
// Environmental variables accessible
require("dotenv").config();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

// Function starts the server
const start = async () => {
  try {
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  } catch (e) {
    console.error(e);
  }
};

start();
