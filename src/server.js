import express from "express";
import _ from "lodash";
import http from "http";
import serverMiddleware from "core/server/middleware";
import Config from "./config";

const app = express();
/**
 * --- Your custom code START ---
 */
app.use(function f1(req, res, next) {
  //some database queries are executed and I get results, say x1
  res.locals.reduxReducers = [];
  res.locals.reduxMiddleware = [];
  next();
});
/**
 * --- Your custom code END ---
 */
// Add the core server as middleware
app.use(serverMiddleware);

const server = http.createServer(app);
const serverPort = process.env.PORT || _.get(Config, "server.port", 3000);

server.listen(serverPort, "0.0.0.0", function(err) {
  if (err) throw err;
  const addr = server.address();

  // eslint-disable-next-line
  console.log("Listening at http://%s:%d", addr.address, addr.port);
});

export default app;