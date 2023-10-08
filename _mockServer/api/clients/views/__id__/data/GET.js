const Chance = require('chance');

const chance = new Chance();

const totalItems = 500;
const json = [...Array(totalItems)].map(() => ({
  name: chance.name(),
  displayName: chance.name(),
  btId: chance.integer({ min: 0, max: 150 }),
  contact: chance.name(),
  phoneNumber: chance.phone({ min: 0, max: 150 }),
  date: chance.date(),
  action: "",
}));

module.exports = (req, res) => {
  const { limit, page } = req.query;
  const numPage = page - 1;
  const numSize = +limit;
  const responseData = json.slice(numPage * numSize, numPage * numSize + numSize);

  res.status(200).json({
    paging: {
      totalRecords: json.length,
    },
    collection: responseData,
  });
};
