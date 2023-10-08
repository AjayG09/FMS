const { delay, file, success } = require('connect-api-mocker/helpers');
const json = require('./GET.200.json');

// JSON generated with https://app.json-generator.com/GdNJqqcoTOYN
module.exports = [delay(2000), success(), file(`${__dirname}/GET.200.json`)];

module.exports = (req, res) => {
    /*
    setTimeout(() => {
      if (req.body.relatedFeatures[0] === 'User Session Monthly Count') {
        res.status(200).sendFile('POST.200.LOGINS.json', { root: __dirname });
      }
      if (req.body.relatedFeatures[0] === 'Total User Count For Company') {
        res.status(200).sendFile('POST.200.USERLOGINS.json', { root: __dirname });
      }
      if (req.body.relatedFeatures[0] === 'Successful Login Percentage') {
        res.status(200).sendFile('POST.200.SUCCESSFULLOGINS.json', { root: __dirname });
      }
      if (req.body.relatedFeatures[0] === 'Admin Session Monthly Count') {
        res.status(200).sendFile('POST.200.ADMINLOGINS.json', { root: __dirname });
      }
    }, 0);
    */
    const { page, size, sort, ...filters } = req.query;
    const numPage = +page;
    const numSize = +size;
    const responseData = json.data.slice(numPage * numSize, numPage * numSize + numSize);

    res.status(200).json({
        rows: json.rows,
        data: responseData,
    });
};