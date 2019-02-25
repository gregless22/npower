// get the model
// const model = require (appRoot + '/models/Model.js')

class PropertyController {
  // userModel;

  constructor(model) {
    this.model = model.property();
  }

  create(req, res, next) {
    //extract data from req
    const form = req.body;

    const suburb = form.postcode;
    const solarCapacity = form.solar.panels | "none";
    const inverterCapacity = form.solar.battery.size | "none";
    const batteryCapacity = form.solar.battery.size | "none";
    const airConCapacity = form.appliances.aircon.size | "none";
    const hotWaterCapacity = form.appliances.hotWater.size | "none";
    const lastPowerBill = form.lastPowerBill | 0;
    const kettle = form.kettle | false;
    const microwave = form.microwave | false;
    const pool = form.appliances.pool | false;
    const spa = form.appliances.spa | false;
    const oven = form.appliances.oven | false;

    return this.model
      .create({
        suburb,
        solarCapacity,
        inverterCapacity,
        batteryCapacity,
        airConCapacity,
        hotWaterCapacity,
        lastPowerBill,
        kettle,
        microwave,
        pool,
        spa,
        oven
      })

  }

   index(req, res, next) {
    return this.model.findAll()
  }
}

module.exports = model => new PropertyController(model);
