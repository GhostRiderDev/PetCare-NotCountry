import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("Connected to the server!");
});

export default server;
