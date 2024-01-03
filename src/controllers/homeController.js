import db from "../models/index";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("checkdata()-___-())", data);
    return res.render("homepage.ejs", {
      data: JSON.stringify(data), //convert ob sang string
    });
  } catch (e) {
    console.log("Error Please check again",e);
  }
};
let aboutPage = (req, res) => {
  return res.render("test/about.ejs");
};
let getCRUD =(req,res)=>
{
  return res.render("crud.ejs")
}

let postCRUD = async(req, res) =>
{
  let message= await CRUDService.CreateNewUser(req.body);
  console.log(req.body) //get client to controller
  console.log(message);
  return res.send("check data send ....")
}
//ob
//{key,
//value}
module.exports = {
  getHomePage: getHomePage,
  aboutPage: aboutPage,
  getCRUD: getCRUD,
  postCRUD:postCRUD,
};
