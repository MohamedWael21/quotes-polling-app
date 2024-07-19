#! /home/mohamed/.nvm/versions/node/v22.1.0/bin/node

const { io } = require("socket.io-client");
const print = require("../lib/uitls");

const socket = io("ws://localhost:5000");

socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("quote", (quote) => {
  print(quote);
});

socket.on("connect_error", (error) => {
  console.error("Connection error:", error);
});
