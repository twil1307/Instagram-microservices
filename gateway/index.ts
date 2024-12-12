import express from "express";
import proxy from "express-http-proxy";
import config from "./config/config";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const auth = proxy(config.AUTH_SERVICE!);

app.use("/api/auth", auth);

const server = app.listen(8080, () => {
  console.log("Gateway is Listening to Port 8080");
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.info("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: unknown) => {
  console.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);
