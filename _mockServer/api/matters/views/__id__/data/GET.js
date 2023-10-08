const Chance = require('chance');

const chance = new Chance();

const totalItems = 500;
const json = [...Array(totalItems)].map(() => ({
  id: chance.guid(),
  matterName: chance.guid(),
  matterNumber: chance.guid(),
  lawFirmNameListing: chance.name(),
  activeDate: chance.date(),
  inactiveDate: chance.date(),
  matterClass: chance.guid(),
  claimNumberListing: chance.guid(),
  firmName: chance.name(),
  numberOfMatters: chance.integer({ min: 0, max: 150 }),
  status: chance.pickone(['ACTIVE', 'INACTIVE']),
  matterType: chance.word(),
  name: chance.name(),
  alerts: chance.pickset([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3),
  menu: '...',
  masterMatterName: chance.name(),
  masterMatterNumber: chance.guid(),
  state: 'ACCEPTED',
  leadNcc: chance.name(),
  subMatterName: chance.name(),
  subMatterNumber: chance.guid(),
  leadCoCounsel: chance.name(),
  lawFirmName: chance.name(),
  matterNum: chance.guid(),
  matterCount: chance.integer({ min: 0, max: 150 }),
  claimNumbers: chance.guid(),
  type: chance.word(),
  badUser: chance.name(),
  role: chance.word(),
  matterStatus: chance.pickone(['ACTIVE', 'INACTIVE']),
  createdDate: chance.date(),
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
