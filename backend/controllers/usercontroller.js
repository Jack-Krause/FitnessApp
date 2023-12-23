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

    getUser: async (req, res) => {
        try {
            const { email, password } = req.body;
            const userToFind = new User( { email, password } );

            const response = await User.find(userToFind);
            console.log(response);

            if (response.includes(email)) {
                res.status(200).send(response);
            } else (res.status(404).send("user not found"));

        } catch (error) {
            res.status(500).send(error.message);
        }
    }


};

module.exports = UserController;