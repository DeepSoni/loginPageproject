/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: function (req, res) {
		console.log(req.body);
		var user = req.body;
		User.findOne({"emailId": req.body.emailId, "password": req.body.password }).exec(function (err, response) {
			if (err) {
				console.log(err);
			}
			//var data = JSON.stringify(response);
			console.log(response);
			res.send(response);
		})	
	}
};

