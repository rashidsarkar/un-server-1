const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const { LOCAL_CLIENT, CLIENT } = require("../config/default");
const applyMiddleWare = (app) => {
  app.use(
    cors({
      origin: [
        LOCAL_CLIENT,
        CLIENT,
        "http://localhost:5173",
        "https://startling-sfogliatella-088d59.netlify.app",
      ],
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(cookieParser());
};
module.exports = applyMiddleWare;
