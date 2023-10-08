const Chance = require('chance');

const chance = new Chance();

const totalItems = 500;
const json = [...Array(totalItems)].map(() => ({
  id: chance.guid(),
  userId: chance.integer({ min: 1000, max: 9000, digit: 4 }),
  assignedCount: chance.integer({ min: 1, max: 50 }),
  name: chance.name(),
  username: chance.name(),
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
