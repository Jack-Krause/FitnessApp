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
			// call .populate() as needed
			const user = await User.findOne({ email: email }).populate(
				"exerciseLibrary"
			).populate(
				"playlist"
			);

			return user;
		} catch (error) {
			throw new Error("[getUserByEmail error]");
		}
	},

	// retrieve the user's workout template playlist
	getPlayList: async (req, res) => {
		try {
			const email = req.body.email;

			const user = await UserController.getUserByEmail(email);

			if (!user) {
				console.error("error getting user")
				return res.status(404).send("unable to retrieve user");
			}

			if (!user.playlist || user.playlist.length <= 0) {
				console.error("error with playlist");
				return res.status(404).send("playlist doesn't exist");
			}

			res.status(201).send(user.playlist);
		} catch (error) {
			console.error(error);
			res.status(500).send(error.message);
		}
	},
};

module.exports = UserController;
