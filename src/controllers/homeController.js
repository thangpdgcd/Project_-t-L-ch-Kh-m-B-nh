import db from "../models/index";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("checkdata()-___-())", data);
    return res.render("homepage.ejs", {
      data: JSON.stringify(data), //convert ob sang string
    });
  } catch (e) {
    console.log(e);
  }
};
let aboutPage = (req, res) => {
  return res.render("test/about.ejs");
};
//ob
//{key,
//value}
module.exports = {
  getHomePage: getHomePage,
  aboutPage: aboutPage,
};
