import { Server } from "./server";

const server = new Server();

server.listen((port, host) => {
  console.log(`Server is listening on https://${host}:${port}`);
});
