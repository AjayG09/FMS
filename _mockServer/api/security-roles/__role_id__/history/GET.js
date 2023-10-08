const { delay, file, success } = require('connect-api-mocker/helpers');
const json = require('./GET.json');

// JSON generated with https://app.json-generator.com/GdNJqqcoTOYN
module.exports = [delay(50000), success(), file(`${__dirname}/GET.json`)];

module.exports = (req, res) => {
  const { page, size, sort } = req.query;
  const numPage = +page;
  const numSize = +size;
  const sortParams = sort?.split(',')?.map((item) => {
    const params = item.split(' ')
    return { colId: params[0], sortOrder: params[1] }
  }) || []
  const data = sortParams.length ? json.data.sort((a, b) => {
    function sortColumns(i) {
      const sortReturnVal = sortParams[i].sortOrder === 'asc' ? 1 : -1
      if (a[sortParams[i].colId] === b[sortParams[i].colId]) {
        return sortParams.length - 1 > i ? sortColumns(i + 1) : 0
      } else {
        return a[sortParams[i].colId] > b[sortParams[i].colId] ? sortReturnVal : -sortReturnVal
      }
    }
    return sortColumns(0);
  }) : json.data;
  const index = (numPage - 1) * numSize;
  const responseData = data.slice(index, index + numSize)
  res.status(200).json({
    rows: data.length,
    data: responseData,
  });
};