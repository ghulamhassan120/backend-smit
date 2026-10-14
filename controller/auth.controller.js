const { findUser } = require("../model/User");

exports.login = async (email,password) => {
  try {
    const user = await findUser(email);
    if(user.password===password){
        return "Login Sucessfully!"
    }
    return "wrong email or password"
  } catch (err) {
    throw err;
  }
};