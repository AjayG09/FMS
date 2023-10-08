const { delay, file, success } = require('connect-api-mocker/helpers');
const json = require('./GET.200.json');

// JSON generated with https://app.json-generator.com/GdNJqqcoTOYN
module.exports = [delay(2000), success(), file(`${__dirname}/GET.200.json`)];

module.exports = (req, res) => {
  const { limit, page, sort, ...filters } = req.query;
  const filterKeys = Object.keys(filters);
  const numPage = +page;
  const numSize = +limit;
  const sortParams =
    sort?.split(',')?.map((item) => {
      const params = item.split(' ');
      return { colId: params[0], sortOrder: params[1] };
    }) || [];

  let { data } = json;
  if (filterKeys.length) {
    data = data.filter((item) => {
      return filterKeys.some((key) => filters[key] === item[key]);
    });
  }

  data = sortParams.length
    ? data.sort((a, b) => {
        function sortColumns(i) {
          const sortReturnVal = sortParams[i].sortOrder === 'asc' ? 1 : -1;
          if (a[sortParams[i].colId] === b[sortParams[i].colId]) {
            return sortParams.length - 1 > i ? sortColumns(i + 1) : 0;
          }
          return a[sortParams[i].colId] > b[sortParams[i].colId] ? sortReturnVal : -sortReturnVal;
        }
        return sortColumns(0);
      })
    : data;
  const index = (numPage - 1) * numSize;
  const responseData = data.slice(index, index + numSize);
  res.status(200).json({
    content: { items: responseData },
    page: {
      totalElements: data.length,
    },
  });
};
