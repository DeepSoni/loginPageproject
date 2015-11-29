/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var User = {

	adapter: "someMongodbServer",
	tableName: "User_mst",
	schema: true,
  attributes: {
  	emailId: {
  		type: 'String',
  		required: true
  	},
  	password: {
  		type: 'String',
  		required: true
  	}
  },
};

module.exports = User;