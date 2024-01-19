const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

const start = async () => {
  try {
    app.listen(port, console.log(`Server listening on port ${port}`));
  } catch (e) {
    console.log(e);
  }
};

start();
