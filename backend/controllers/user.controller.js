const User = require("../models/user.model");

const UserController = {
  // Add CRUDL methods for User
  getAllUsers: async (req, res) => {
    try {
      const results = await User.find().limit(100);
      console.log(results);
      res.status(200).send(results);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // retrieve a user form the db
  getUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(email, password);

      const user = await User.findOne({ email, password });

      if (user) {
        // 200 status code: accepted
        res.status(200).send(user);
      } else {
        res.status(404).send("User not found");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // post a new user to the db
  createUser: async (req, res) => {
    try {
      const { email, password, name } = req.body;
      console.log(email, password, name);

      const userToPost = new User({
        email,
        password,
        name,
      });

      await userToPost.save();
      // 201 status code: created
      res.status(201).send("User creation success");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // retrieve a User instance by email
  getUserByEmail: async (email) => {
    try {
      const user = await User.findOne({ email: email }).populate('exerciseLibrary');
      return user;
    } catch (error) {
      throw new Error("[getUserByEmail error]");
    }
  },
};

module.exports = UserController;
