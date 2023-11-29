import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();
let initWebRoutes = (app) => {
  router.get("/about", homeController.aboutPage);
  router.get("/", homeController.getHomePage); //call file homecontroller
  return app.use("/", router);
};
module.exports = initWebRoutes;
