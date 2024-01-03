import bcrypt from "bcrypt"
const salt = bcrypt.genSaltSync(10);

//get data from homecontroller postCRUD
let CreateNewUser = async(data) =>
{
    //create new hasspass if password -> haspass
    let hashPasswordFromBcrypt= await hashUserPssword(data.password)
    console.log("data from service");
    console.log(data);
    console.log(hashPasswordFromBcrypt);
}

//hashpass user 
let hashUserPssword = (password) =>
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