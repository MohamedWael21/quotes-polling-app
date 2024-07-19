const { Server } = require("socket.io");
const dotenv = require("dotenv");

const getQuote = require("./lib/utils");

dotenv.config();

const PORT = process.env.PORT || 5000;
const INTERVAL = process.env.INTERVAL || 8000;

const io = new Server(PORT);

io.on("connection", (socket) => {
  console.log("User is connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

setInterval(async () => {
  const { data } = await getQuote();
  io.emit("quote", data);
}, INTERVAL);

console.log(`Socket.io server running on port ${PORT}`);
