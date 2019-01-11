// Model.js


//this is the class to create the model.  Requires and instance of the sequalise ORM
class Model {
	constructor(seq){
		//create the instances
		const sequelize = seq;
		const userModel = require('./user')(seq)
		const userProperty = require('./property')(seq)


		//create the relationships
		userProperty.belongsTo(userModel)

		//migrate the tables
		sequelize.sync({ force: true })
  			.then(() => {
    			console.log(`Database & tables created!`)
  			})
  			.catch((err) => {
  				console.log(err)
  			})
	}
}

module.exports = async (seq) => {
	await new Model(seq)
}