const Chance = require('chance');

const chance = new Chance();

const totalItems = 500;
const json = [...Array(totalItems)].map(() => ({
  id: chance.guid(),
  dataTime: chance.date(),
  performedBy: chance.name(),
  type: chance.pickone(['client']),
  action: chance.pickone(['Security Role Created', 'Security Role Updated']),
  description: chance.word(),
  firmName: chance.name(),
  numberOfMatters:  chance.integer({ min: 0, max: 150 }),
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
