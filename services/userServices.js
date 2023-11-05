const { getUsersModel } = require("../models/users");
const { v4: uuidv4 } = require('uuid');
var bcrypt = require('bcryptjs');


async function registerUser(body) {
    const Users = getUsersModel();
    const { email, password, firstName, lastName } = body;

    try {
         // simple validations
        if(!/[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}/.test(email)){
            return "Invalid email";
        }
        if(password.length < 6){
            return "Password needs at least 6 characters";
        }
        const alreadyExist = await Users.findOne({ where: { email } });
        if(alreadyExist){
            return "Email already in use";
        }
        // encrypt password
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
    } catch (err) {
        console.log(err);
        return null;
    }
}


async function loginUser({ email, password }) {
    const Users = getUsersModel();
    const storedUser = await Users.findOne({ where: { email } });

    if(!storedUser){
        return null;
    }

    const encryptedPass = storedUser.get('password')
    const validPass = await bcrypt.compare(password, encryptedPass);

    if(!validPass) return null;

    return {
        email: storedUser.email,
        firstName: storedUser.firstName
    }
}


module.exports = {
    registerUser,
    loginUser
}