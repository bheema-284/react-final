const app = require("../index");
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;
const connect = require("./Configs/db");
app.listen(8080, async () => {
  await connect();
  console.log("Listining to the  port",port);
});
