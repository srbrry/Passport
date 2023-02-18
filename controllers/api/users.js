//getting info from routes/api/users.js  

const User = require("../../models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: "24h" }
    )
}

async function create(req, res) {
    try {
        console.log(req.body)
        const user = await User.create(req.body)
        console.log(user + "created user")
        const token = createJWT(user)

        res.json(token)

    } catch (error) {
        res.status(400).json(error)
    }
}

async function logIn(req, res) {
    try {
        //get the uer thats trying to log in
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error();
        //check if the password if valid   
        const match = await bcrypt.compare(req.body.password, user.password);
        //if so create a JWT and send it back
        //if not throw an error
        if (match){
            res.json(createJWT(user))
        }else {
            throw new Error()
        }
      } catch {
        res.status(400).json('Bad Credentials');
      }
}

function checkToken(req, res) {
    console.log("req.user", req.user)
    res.json(req.exp)
}
    
module.exports = {
    create,
    logIn,
    checkToken
}