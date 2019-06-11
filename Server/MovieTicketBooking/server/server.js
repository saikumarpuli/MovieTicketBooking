const PORT = process.env.PORT || 3333;
import os from "os";
import express from "express";
import http from "http";
import RoutesConfig from "./config/routes.conf";
 import Routes from "./routes/index";

const app = express();

RoutesConfig.init(app);
app.get("/",(req,res)=>{
  res.send("ok its work");
})
 Routes.init(app, express.Router());

http.createServer(app)
    .listen(PORT, () => {
      console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
      console.log(`enviroment: ${process.env.NODE_ENV}`);
    });
