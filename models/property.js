// Property.js

const Sequelize = require('sequelize')

module.exports = (seq) => {

	const Property = seq.define('property', {
		street: {
			type: Sequelize.STRING,
			allowNull: false
		},
		suburb: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		solarCapacity: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		inverterCapacity: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		batteryCapacity: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		airCpnCapacity: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		hotWaterCapacity: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		lastPowerBill: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		kettle: {
			type: Sequelize.BOOLEAN,
			allowNull: false
		},
		microwave: {
			type: Sequelize.BOOLEAN,
			allowNull: false
		},
		pool: {
			type: Sequelize.BOOLEAN,
			allowNull: false
		},
		spa: {
			type: Sequelize.BOOLEAN,
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

	return Property
}
