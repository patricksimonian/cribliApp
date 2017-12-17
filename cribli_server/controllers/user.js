const config = require('config');
const JWT = require('jsonwebtoken');
const User = require('../models/user');
const JWTSECRET = config.get('token.secret');
var moment = require('moment');

// sign jwt
const signToken = function(user) {
	return JWT.sign({
		iss: config.get('token.issuer'),
		sub: user.id,
		iat: moment().unix(),
		exp: moment().add(1, 'h').unix()
	}, JWTSECRET);
}

module.exports = {
	signup: async function signUpUserLocally(req, res, next) {
		const {email, password} = req.body;
		console.log('signup', email, password)
		// try to findUser
		let user = await User.findOne({'local.email': email});
		if(user) {
			res.status(403).json({error: "Email already in use!"});
		}

		//if no user found create a new user and save
		let newUser = new User({
			method: 'local',
			local: {
				email, password
			}
		});

		await newUser.save();
		// sign token and send back
		res.status(200).json({token: signToken(newUser)});
	},

	login: async function loginUserLocally(req, res, next) {
		const {email, password} = req.body;
		let pwMatched = false;
		// find user by email
		let user = await User.findOne({'local.email': email});
		// if user is valid and password matches
		if(user && await user.isValidPassword(password)) {
			res.status(200).json({token: signToken(user)});
		} else {
			res.status(401).json({message: "Incorrect Credentials!"})

		}

	}

}
