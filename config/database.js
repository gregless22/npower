/* eslint-disable no-console */
const Sequelize = require('sequelize');

//create the instance and connect
const sequelize = new Sequelize({
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_ROOT_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  dialect: 'mysql',
  host: 'db',
  port: process.env.MYSQL_PORT | 3306 
});

	const port = process.env.MYSQL_PORT | 3306

//test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log(`Connection has been established successfully on port ${ port }`);
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = sequelize

 