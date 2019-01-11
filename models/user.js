// user.js
const Sequelize = require('sequelize')

module.exports = (seq) => {

	const User = seq.define('user', {
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		street: {
			type: Sequelize.STRING,
			allowNull: false
		},
		suburb: {
			type: Sequelize.STRING,
			allowNull: false
		},
		id: {
	        type: Sequelize.INTEGER,
	        primaryKey: true,
	        autoIncrement: true,
	     },

	    // Timestamps
      	createdAt: Sequelize.DATE,
      	updatedAt: Sequelize.DATE
	})

	return User
}

