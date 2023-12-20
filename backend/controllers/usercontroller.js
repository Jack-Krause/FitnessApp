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
    }
};

module.exports = UserController;