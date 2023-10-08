const Chance = require('chance');

const chance = new Chance();

const totalItems = 90;
const json = [...Array(totalItems)].map(() => ({
  id: chance.guid(),
  userName: chance.name(),
  noOfPermissions: chance.integer({ min: 1, max: 15 }),
 
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
