import express from "express";
import routes from "./routes";
import mongoose from "mongoose";
import path from "path";
import socket from "socket.io";
import http from "http";
import cors from "cors";

const app = express();

app.use(cors());

const server = http.Server(app);
const io = socket(server);

// web socket'
io.on("connection", socket => {
  socket.on("connectRoom", box => {
    socket.join(box);
  })
});

mongoose.connect(
  "mongodb+srv://root:root@cluster0-hgl24.mongodb.net/dropbox?retryWrites=true",
  {
    useNewUrlParser: true
  }
);

/// middleware global setando IO dentro da requisição
app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

export default { server, app };
