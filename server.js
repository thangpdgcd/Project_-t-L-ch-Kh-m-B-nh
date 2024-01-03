import express from "express";
import bodyParser from "body-parser"; //query params
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";

require("dotenv").config();

const app = express();

//config app
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({ extended: true ,limit:'5mb'}));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Backend nodejs running:http://localhost:8080");
});
