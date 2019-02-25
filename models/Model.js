// Model.js

//this is the class to create the model.  Requires and instance of the sequalise ORM
class Model {
  constructor(seq) {
    //create the instances
    this.userModel = require("./user")(seq);
    this.userProperty = require("./property")(seq);

    //create the relationships
    this.userProperty.belongsTo(this.userModel);

    //migrate the tables
    seq
      .sync({})
      .then(() => {
        console.log(`Database & tables created!`);
      })
      .catch(err => {
        console.log(err);
      });
  }

  user() {
    return this.userModel;
  }

  property() {
    return this.userProperty;
  }
}

module.exports = seq => {
  return new Model(seq);
};
