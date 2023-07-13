const { generateToken } = require("../middlewares/auth-workflow");

const schema = require("../validators/blogValidator");
const STATUSCODE = require("http-status-codes");
const UserSchema = require("../model/userModel");


const usersLogin = async (req, res) => {
  const { username, password } = req.body;
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(STATUSCODE.BAD_REQUEST).json({
        message: error.message,
    })
  }

  try {
    const user = await UserSchema.findOne({username});

    if (!user) {
        return res.status(STATUSCODE.UNAUTHORIZED).json({
            message: "invalid username or password"
        });
    }
    
  const token = await generateToken(user);
  return res.json({
    token: token,
  })
  } catch (error) {
    return res.status(STATUSCODE.INTERNAL_SERVER_ERROR).json({
        message: "internal Server error"
    })    
  }


};

module.exports = usersLogin;
