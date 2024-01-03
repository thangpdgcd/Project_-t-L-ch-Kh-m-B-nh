import bcrypt from "bcryptjs"
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);

//get data from homecontroller postCRUD
let CreateNewUser = async(data) =>
{
  return new Promise( async(resolve,reject)=>
  {
    try {
      //create new hasspass if password -> haspass
      let hashPasswordFromBcrypt= await hashUserPassword(data.password)   
      await db.User.create({
      email: data.email,
      password: hashPasswordFromBcrypt,
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      gender: data.gender =='1' ?true : false, //Math 3rth place
      image:data.image,
      roleId: data.roleId,
      }) 
      resolve('Log data successfull')
    } catch (e) {
      reject("Error Please check again",e);
    }
  })    
  /*
  1. create new function if hasspassword and check data from controller
    console.log("data from service");
     console.log(data);
     console.log(hashPasswordFromBcrypt);*/
}
//hashpass user 
let hashUserPassword = (password) =>
{
    return new Promise(async(resolve, reject) =>
    {
      try {
          let hashPassword = await bcrypt.hashSync(password,salt);
          resolve(hashPassword);
      } catch (error) {
        reject(error)
      }
    })
}
module.exports = {
    CreateNewUser: CreateNewUser,
    hashUserPssword: hashUserPssword,
}