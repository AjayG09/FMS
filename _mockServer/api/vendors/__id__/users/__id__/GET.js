const Chance = require('chance');

const chance = new Chance();

module.exports = (req, res) => {

  res.status(200).json({
    firstName: chance.name(),
    lastName: chance.name(),
    email: chance.email(),
    phone: chance.phone(),
    activeDate: '10/01/23',
    inactiveDate: '',
  });
};
