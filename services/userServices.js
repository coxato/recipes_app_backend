const { getUsersModel } = require("../models/users");
const { v4: uuidv4 } = require('uuid');
var bcrypt = require('bcryptjs');


async function registerUser(body) {
    const Users = getUsersModel();
    const { email, password, firstName, lastName } = body;

    const alreadyExist = await Users.findOne({ where: { email } });
    if(alreadyExist){
        return null;
    }
    
    const salt = await bcrypt.genSalt(10);
    const encryptedPass = await bcrypt.hash(password, salt);

    const newUser = new Users({
        id: uuidv4(),
        email,
        firstName, 
        lastName,
        password: encryptedPass
    })
    await newUser.save();

    return newUser.id;
}


async function loginUser({ email, password }) {
    const Users = getUsersModel();
    const storedUser = await Users.findOne({ where: { email } });

    if(!storedUser){
        return false;
    }

    const encryptedPass = storedUser.get('password')
    const validPass = await bcrypt.compare(password, encryptedPass);

    return validPass ? true : false;
}


module.exports = {
    registerUser,
    loginUser
}