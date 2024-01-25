const User = require("../models/User");

console.log(User);

const createUser = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    res.status(404).send("Data is missing");
  }
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const result = await user.save();
  res.status(200).send(result);
};

const getAllUsers = async (req, res) => {
  const usesrFromDB = await User.find();
  if (!usesrFromDB) {
    res.status(404).send("Data is missing");
    return;
  }

  res.status(200).json(usesrFromDB);
};

module.exports = { createUser, getAllUsers };

module.exports = createUser;
