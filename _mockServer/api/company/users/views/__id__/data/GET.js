const Chance = require('chance');

const chance = new Chance();

const totalItems = 500;
const json = [...Array(totalItems)].map(() => ({
  firstName: chance.name(),
  lastName: chance.name(),
  email: chance.email(),
  status: chance.name(),
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
